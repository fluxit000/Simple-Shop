import { API_URL } from "../../config";
import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { Products } from "./products";



export type ItemInCard = {
    _id: string
    title: string
    price: number
    quantity: number
}

export type ShoppingCart = {
    totalPrice: number
    itemsInCard: ItemInCard[]
}

const initialState:ShoppingCart = {
    totalPrice: 0,
    itemsInCard: []
}


export const shoppingCartSlice = createSlice({
    name:'shoppingCart',
    initialState,
    reducers:{
        updateCardData(state, action){
            state.itemsInCard = action.payload.newCard
            state.totalPrice = action.payload.updatePrice
        },
        updateProductQuantity(state, action){
            const item = state.itemsInCard.find(element=>element._id === action.payload._id)
            if(!item){
                return
            }
            const itemObj:ItemInCard = {...item} 
            const totalPrice = state.totalPrice
            if(action.payload.operation == "decrement"){
                state.itemsInCard[action.payload.index].quantity--
                state.totalPrice = totalPrice - itemObj.price
            }
            else if(action.payload.operation == "increment"){
                state.itemsInCard[action.payload.index].quantity++
                state.totalPrice = totalPrice + itemObj.price

            }
            else if(action.payload.operation == "remove"){
                state.itemsInCard.splice(action.payload.index, 1)
                state.totalPrice = totalPrice - itemObj.price
            }
        }
    }
})

export const addToCard = (_id: string)=>{
    return (dispatch:Dispatch, getState:()=>{shoppingCart: ShoppingCart, products: Products})=>{
        const state = getState()
        const indexInCard = state.shoppingCart.itemsInCard.findIndex(element=>element._id === _id)
        const product = state.products.products.find(element=>element._id === _id)
        if(!product){
            return
        }
        const productObj:ItemInCard = {...product, quantity: 0}
        if(indexInCard < 0){
            const newCard = [...state.shoppingCart.itemsInCard]
            productObj.quantity = 1
            
            newCard.push(productObj)
            dispatch(shoppingCartSlice.actions.updateCardData({
                newCard, 
                updatePrice: state.shoppingCart.totalPrice + productObj.price
            }))
        }
        else{
            let newCard = [...state.shoppingCart.itemsInCard]
            newCard[indexInCard] = {...newCard[indexInCard], 
                quantity: newCard[indexInCard].quantity+1
            }

            dispatch(shoppingCartSlice.actions.updateCardData({
                newCard, 
                updatePrice: state.shoppingCart.totalPrice + productObj.price
            }))
        }

    }
}

export const shoppingCartAction = shoppingCartSlice.actions