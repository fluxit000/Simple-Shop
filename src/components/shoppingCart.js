import { useDispatch, useSelector } from "react-redux"

import { API_URL } from "../config"

import './shoppingCart.css'
const ShoppingCart = ()=>{
    const {totalPrice, itemsInCard} = useSelector(value=>value.shoppingCart)

    return (<div className="cards">
        {itemsInCard.map(element=><div className="card">
            <div className="card-holder-left">
                <img className="crad-image" src={`${API_URL}/images/${element._id}.jpg`}/>
                <div className="crad-title">{element.title}</div>
            </div>
            <div className="card-holder-right">
                <div className="crad-price">{element.price} zł</div>
                <button className="crad-quantity-buttons">-</button>
                <div className="crad-quantity">{element.quantity}</div>
                <button className="crad-quantity-buttons">+</button>
            </div>
        </div>)}
    </div>)
}

export default ShoppingCart