import { useEffect, useState } from "react"
import './products.css'

import { API_URL } from "../config"

import { useDispatch, useSelector } from "react-redux"
import { productsFetch } from '../store/slices/products'

const Products = ()=>{

  const [width, setWidth] = useState(window.innerWidth)

  const products = useSelector(s=>s.products)

  const dispatch = useDispatch()

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(()=>{
    dispatch(productsFetch())
  },[])

  //product.title.length > 20 && width < 680 ? product.title.slice(0,20)+"...":product.title

  return(<div id="products">
    {products.map(product=>
      <div className="product" key={product._id}>
        <div className="product-image-holder"><img className="product-image" src={`${API_URL}/images/${product._id}.jpg`}/></div>
        <div className="product-title">{product.title}</div>
        <div className="product-price">{product.price} zł</div>
        <div className="icon-svg add-product-button">add_shopping_cart</div>
      </div>
    )}
  </div>)
}

export default Products