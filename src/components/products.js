import { useEffect, useState } from "react"
import './products.css'

import { API_URL } from "../config"

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"

import { productsFetch } from '../store/slices/products'
import { addToCard } from "../store/slices/shoppingCart"

import Pagination from "./pagination"



const Products = ()=>{

  const [width, setWidth] = useState(window.innerWidth)

  const products = useSelector(s=>s.products.products)
  const isLoading = useSelector(s=>s.products.isLoading)
  const hasError = useSelector(s=>s.products.hasError)

  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const onClickProduct = (e,id)=>{
    console.log()
    if(!e.target.classList.value.includes("add-product-button")){
      navigate("/product/"+id)
    }
  }

  return(<>

  {isLoading && <div className="spinner-container">
    <div className="loading-spinner">
    </div>
  </div>}

  {hasError && <div className="products-is-empty">
    Bląd połaczenia z serwer spróbuj ponownie
  </div>}

  {products.length === 0 && !hasError && <div className="products-is-empty">
    Brak produktów o takiej nazwie
  </div>}

  {!isLoading && products.length !== 0 && <>
    <div id="products">
      {products.map(product=>
        <article onClick={(e)=>onClickProduct(e, product._id)} className="product" key={product._id}>
          <div className="product-image-holder">
            <LazyLoadImage
              width={260}
              height={260}
              className="product-image" 
              src={`${API_URL}/images/${product._id}/1.jpg`}
              alt={product.title}/>
          </div>
          <div className="product-title">{product.title}</div>
          <div className="product-price">{product.price} zł</div>
          <div className="icon-svg add-product-button" onClick={(e)=>dispatch(addToCard(product._id))}>add_shopping_cart</div>
        </article>
      )}
    </div>
    <Pagination/>
  </>}
  </>)
}

export default Products