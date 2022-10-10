import { createSlice, configureStore } from "@reduxjs/toolkit";

import { API_URL } from "../config";

const initialState = {products:[]}


const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts(state, action){
            state.products = action.payload
        }
    }
})

export const productsFetch = (inputValue)=>{
    return async (dispatch)=>{
        const fetchRequest = async ()=>{
            fetch(`${API_URL}/products`,{
                method: 'POST',
                body: JSON.stringify({
                    title: !inputValue? "":inputValue
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response)=>response.json())
            .then((response)=>{
                dispatch(productsActions.setProducts(response))
            })
            .catch((e)=>{
                console.log(e)
            })
        }
        await fetchRequest()
    }
}

export const productsActions = productsSlice.actions

const store = configureStore({
    reducer: productsSlice.reducer
});

export default store