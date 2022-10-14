import { API_URL } from "../../config";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
            const item = {...state.itemsInCard.find(element=>element._id === action.payload._id)}
            const totalPrice = state.totalPrice
            if(action.payload.operation == "decrement"){
                state.itemsInCard[action.payload.index].quantity--
                state.totalPrice = totalPrice - item.price
            }
            else if(action.payload.operation == "increment"){
                state.itemsInCard[action.payload.index].quantity++
                state.totalPrice = totalPrice + item.price

            }
            else if(action.payload.operation == "remove"){
                state.itemsInCard.splice(action.payload.index, 1)
                state.totalPrice = totalPrice - item.price
            }
        }
    }
})

export const addToCard = (_id)=>{
    return (dispatch, getState)=>{
        const state = getState()
        const indexInCard = state.shoppingCart.itemsInCard.findIndex(element=>element._id === _id)
        const product = {...state.products.products.find(element=>element._id === _id)}
        if(indexInCard < 0){
            const newCard = [...state.shoppingCart.itemsInCard]
            product.quantity = 1
            
            newCard.push(product)
            dispatch(shoppingCartSlice.actions.updateCardData({
                newCard, 
                updatePrice: state.shoppingCart.totalPrice + product.price
            }))
        }
        else{
            let newCard = [...state.shoppingCart.itemsInCard]
            newCard[indexInCard] = {...newCard[indexInCard], 
                quantity: newCard[indexInCard].quantity+1
            }

            dispatch(shoppingCartSlice.actions.updateCardData({
                newCard, 
                updatePrice: state.shoppingCart.totalPrice + product.price
            }))
        }

    }
}

export const shoppingCartAction = shoppingCartSlice.actions