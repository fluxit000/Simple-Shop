import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../config"

import './productDetails.css'

import { useDispatch } from "react-redux"
import { addToCard } from "../store/slices/shoppingCart"
import { Product } from "../store/slices/products"
import { useAppDispatch } from "../store"

type Response = {
    lastImage: number
    item: Product
}

const ProductDetails = ()=>{
    const productId = useParams().id
    const [product, setProduct] = useState<Response | null>(null)
    const [imageIndex, setImageIndex] = useState(1)
    const [imageIsChange, setImageIsChange] = useState(false)
    const [imageIsLoading, setImageIsLoading] = useState(false)

    const dispatch = useAppDispatch()

    useEffect(()=>{
        fetch(`${API_URL}/product/${productId}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>response.json())
        .then((response)=>{
            setProduct(response)
        })
    },[])

    useEffect(()=>{
        if(imageIsLoading)
            return
        setImageIsChange(true)
        setTimeout(()=>{
            setImageIsChange(false)
        },700)
    },[imageIsLoading])

    const onClickChange = (direction: string)=>{
        if(imageIsChange)
            return
        setImageIsLoading(true)
        if(direction == "left"){
            if(imageIndex == 1){
                setImageIndex(product!.lastImage)
            }
            else{
                setImageIndex(val=>val-1)
            }
        }
        else {
            if(imageIndex == product!.lastImage){
                setImageIndex(1)
            }
            else{
                setImageIndex(val=>val+1)
            }
        }
    }

    const onLoad = ()=>{
        setImageIsLoading(false)
    }


    return(<article id="details-container">
        {product && <>
        <div id="details-image-container">
            <button className="details-change-img img-left" onClick={()=>onClickChange("left")}></button>
            <img 
                id="details-image" 
                className={(imageIsChange? "image-change": "")+(imageIsLoading? " invisible":"")}
                src={`${API_URL}/images/${product.item._id}/1-${imageIndex}.jpg`}
                onLoad={onLoad}
            />
            <button className="details-change-img img-right" onClick={()=>onClickChange("right")}></button>
        </div>
        <div>
            <div id="details-name">{product.item.title}</div>
            <div id="details-order-container">
                <div id="details-order">
                    {product.item.price} zł
                    <button id="details-add-card" onClick={()=>dispatch(addToCard(product.item._id))}>Dodaj do koszyka</button>
                </div>
            </div>
        </div>
        </>}
            
    </article>)
}

export default ProductDetails