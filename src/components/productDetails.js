import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../config"
import './productDetails.css'

const ProductDetails = ()=>{
    const productId = useParams().id
    const [product, setProduct] = useState({})

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


    return(<div id="details-container">
        <div id="details-image-container">
            <img id="details-image" src={`${API_URL}/images/${product._id}/1-1.jpg`}/>
        </div>
        <div>
            <div id="details-name">{product.title}</div>
        </div>
            
    </div>)
}

export default ProductDetails