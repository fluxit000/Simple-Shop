const express = require('express')
const path = require('path')
let cors = require("cors");

const app = express()

const port = 8081

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')))

app.get('/products', (req, res) => {
  res.json([
    {title:"Acer Aspire 5 R5-5500U/16GB/512/Win11",
    imageUrl:"http://192.168.0.102:8081/images/pr1.jpg",
    price: 2899.00},
    {title:"Acer Aspire 5 R5-5500U/16GB/512/Win11",
    imageUrl:"http://192.168.0.102:8081/images/pr1.jpg",
    price: 2899.00},
    {title:"Acer Aspire 5 R5-5500U/16GB/512/Win11",
    imageUrl:"http://192.168.0.102:8081/images/pr1.jpg",
    price: 2899.00},
    {title:"Acer Aspire 5 R5-5500U/16GB/512/Win11",
    imageUrl:"http://192.168.0.102:8081/images/pr1.jpg",
    price: 2899.00},
    {title:"Acer Aspire 5 R5-5500U/16GB/512/Win11",
    imageUrl:"http://192.168.0.102:8081/images/pr1.jpg",
    price: 2899.00},
    {title:"Acer Aspire 5 R5-5500U/16GB/512/Win11",
    imageUrl:"http://192.168.0.102:8081/images/pr1.jpg",
    price: 2899.00},
    {title:"Acer Aspire 5 R5-5500U/16GB/512/Win11",
    imageUrl:"http://192.168.0.102:8081/images/pr1.jpg",
    price: 2899.00}
  ])
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})