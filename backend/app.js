const express = require('express')
const path = require('path')
const cors = require("cors");
const mongoose = require("mongoose")
require('dotenv').config()

const Product = require('./models/product')

const app = express()

const port = 8081

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')))

app.get('/products', (req, res) => {
  Product.find()
    .limit(20)
    .then((products)=>{
      res.json(products)
    })
})

mongoose.connect(process.env.MONGODB).then(()=>{
  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
}).catch((error)=>{
  console.log(error)
})