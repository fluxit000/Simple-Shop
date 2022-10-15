import { useEffect, useState } from "react"
import './products.css'

import { API_URL } from "../config"

import { useDispatch, useSelector } from "react-redux"

import { productsFetch } from '../store/slices/products'
import { addToCard } from "../store/slices/shoppingCart"
import Pagination from "./pagination"


const Products = ()=>{

  const [width, setWidth] = useState(window.innerWidth)

  const products = useSelector(s=>s.products.products)

  const dispatch = useDispatch()

  const isLoading = useSelector(s=>s.products.isLoading)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(()=>{
    dispatch(productsFetch("", 1))
  },[])

  //product.title.length > 20 && width < 680 ? product.title.slice(0,20)+"...":product.title

  return(<>
  {isLoading && <div className="spinner-container">
    <div className="loading-spinner">
    </div>
  </div>}
  {products.length === 0 && <div className="products-is-empty">
    Brak produktów o takiej nazwie
  </div>}
  {!isLoading && products.length !== 0 && <>
    <div id="products">
      {products.map(product=>
        <div className="product" key={product._id}>
          <div className="product-image-holder"><img className="product-image" src={`${API_URL}/images/${product._id}.jpg`}/></div>
          <div className="product-title">{product.title}</div>
          <div className="product-price">{product.price} zł</div>
          <div className="icon-svg add-product-button" onClick={()=>dispatch(addToCard(product._id))}>add_shopping_cart</div>
        </div>
      )}
    </div>
    <Pagination/>
  </>}
  </>)
}

export default Products