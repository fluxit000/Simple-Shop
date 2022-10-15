const express = require('express')
const path = require('path')
const cors = require("cors");
const mongoose = require("mongoose")
const bodyparser = require('body-parser')
const Product = require('./models/product')

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

mongoose.connect(process.env.MONGODB).then(()=>{
  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
}).catch((error)=>{
  console.log(error)
})