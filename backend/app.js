const express = require('express')
const path = require('path')
const cors = require("cors");
const mongoose = require("mongoose")
require('dotenv').config()
const bodyparser = require('body-parser')

const Product = require('./models/product')

const app = express()


const port = 8081

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get('/products', (req, res) => {
  Product.find()
    .limit(20)
    .then((products)=>{
      res.json(products)
    })
})

app.post('/products/find', (req, res) => {
  Product.find({title:{$regex:req.body.title}})
    .limit(20)
    .then((products)=>{
      res.json(products)
    }).catch((e)=>{
      console.log(e)
    })
})

mongoose.connect(process.env.MONGODB).then(()=>{
  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
}).catch((error)=>{
  console.log(error)
})