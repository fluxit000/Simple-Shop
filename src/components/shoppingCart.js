import { useDispatch, useSelector } from "react-redux"

import { shoppingCartAction } from "../store/slices/shoppingCart"

import { API_URL } from "../config"

import './shoppingCart.css'
import { Link } from "react-router-dom"
const ShoppingCart = ()=>{
    const {totalPrice, itemsInCard} = useSelector(value=>value.shoppingCart)

    const dispatch = useDispatch()

    const onChangeQuantity = (index, operation, _id)=>{
        if(itemsInCard[index].quantity <= 1 && operation == "decrement"){
            dispatch(shoppingCartAction.updateProductQuantity({index, operation: "remove", _id}))
        }
        else{
            dispatch(shoppingCartAction.updateProductQuantity({index, operation: operation, _id}))
        }
    }

    return (<>
    {itemsInCard.length === 0 && <div className="cards-no-products">
        Twój koszyk jest pusty
        <Link className="card-return-home" to="/">Przejdź do strony głównej</Link>
    </div>}
    {itemsInCard.length !== 0 && <div className="card-container">
        <div className="cards">
            {itemsInCard.map((element,i)=><div className="card" key={element._id}>
                <div className="card-holder-left">
                    <img className="crad-image" src={`${API_URL}/images/${element._id}.jpg`}/>
                    <div className="crad-title">{element.title}</div>
                </div>
                <div className="card-holder-right">
                    <div className="crad-price">{element.price} zł</div>
                    <button className="crad-quantity-buttons" 
                    onClick={()=>{onChangeQuantity(i, "decrement", element._id)}}>
                        -
                    </button>
                    <div className="crad-quantity">{element.quantity}</div>
                    <button className="crad-quantity-buttons"
                    onClick={()=>{onChangeQuantity(i, "increment", element._id)}}>
                        +
                    </button>
                </div>
            </div>)}
        </div>
        <div className="card-sum">
        Łączna kwota <span>{totalPrice.toLocaleString()} zł</span>
        </div>
    </div>}
    </>)
}

export default ShoppingCart