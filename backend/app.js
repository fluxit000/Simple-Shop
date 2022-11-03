const express = require('express')
const path = require('path')
const cors = require("cors");
const mongoose = require("mongoose")
const bodyparser = require('body-parser')
const Product = require('./models/product');
const fs = require('fs')
const { ObjectId } = require('mongodb');

const app = express()
require('dotenv').config()

const port = 8081
const ITEMS_PER_PAGE = 20

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.post('/products', (req, res) => {
  const page = req.body.page;
  let totalItems;

  Product.find({title:{$regex:req.body.title, '$options' : 'i'}}).count().then((size)=>{
    totalItems = size
    return Product.find({title:{$regex:req.body.title, '$options' : 'i'}})
      .skip((page-1)* ITEMS_PER_PAGE)
      .limit(ITEMS_PER_PAGE)
      .select({"attributes":0})
      .then((products)=>{
        res.json({
          currentPage: page,
          lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE),
          items: products
        })
      })
  }).catch((error)=>{
    res.status(500).json({
      "status":"DB_ERROR"
    })
  })
})

app.get('/product/:id', (req, res) => {
  Product.find({_id:ObjectId(req.params.id)}).select({"attributes":0})
    .then((products)=>{
      const product = products[0]
      fs.readdir('./images/'+product._id, (err, files) => {
        res.json({item:product, lastImage:files.length-1})
      })
    })
})

mongoose.connect(process.env.MONGODB).then(()=>{
  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
}).catch((error)=>{
  console.log(error)
})