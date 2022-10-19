import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../config"
import './productDetails.css'

const ProductDetails = ()=>{
    const productId = useParams().id
    const [product, setProduct] = useState(null)
    const [imageIndex, setImageIndex] = useState(1)

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
        {product && <><div id="details-image-container">
            <img id="details-image" src={`${API_URL}/images/${product.item._id}/1-${imageIndex}.jpg`}/>
        </div>
        <div>
            <div id="details-name">{product.item.title}</div>
        </div></>}
            
    </div>)
}

export default ProductDetails