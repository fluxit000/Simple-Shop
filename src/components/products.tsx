import React, { useEffect, useState } from "react"
import './products.css'

import { API_URL } from "../config"

import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"

import { Product, productsFetch } from '../store/slices/products'
import { addToCard } from "../store/slices/shoppingCart"

import Pagination from "./pagination"
import { RootState, useAppDispatch } from "../store"
import Filter from "./filter"



const Products = ()=>{

  const [width, setWidth] = useState(window.innerWidth)

  const products = useSelector((s: RootState)=>s.products.products)
  const isLoading = useSelector((s: RootState)=>s.products.isLoading)
  const hasError = useSelector((s: RootState)=>s.products.hasError)

  const dispatch = useAppDispatch()
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

  const navigateToProduct = (id: string)=>{
    navigate("/product/"+id)
  }

  const onClickProduct = (e:React.MouseEvent<HTMLElement> ,id:string)=>{
    if(!(e.target as Element).classList.value.includes("add-product-button")){
      navigateToProduct(id)
    }
  }

  const onKeyDownProduct = (e:React.KeyboardEvent<HTMLElement>,id:string)=>{
    if(e.key === "Enter")
      if(!(e.target as Element).classList.value.includes("add-product-button")){
        navigateToProduct(id)
      }
  }

  return(<>

  
  
  <div id="products-container">
    <Filter/>
    {!isLoading && <div id="products">
      {products.length === 0 && !hasError && <div className="products-is-empty">
        Nie znaleziono takich produktów.
      </div>}

      {isLoading && <div className="spinner-container">
        <div className="loading-spinner">
        </div>
      </div>}

      {hasError && <div className="products-is-empty">
      Bląd połaczenia z serwer spróbuj ponownie
      </div>}

      {products.length !== 0 && products.map((product:Product)=>
        <article 
          onClick={(e)=>onClickProduct(e, product._id)} 
          className="product" key={product._id} 
          tabIndex={0}
          onKeyDown={(e)=>onKeyDownProduct(e, product._id)}>
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
    </div>}
  </div>
  {!hasError && <Pagination/>}
  </>)
}

export default Products