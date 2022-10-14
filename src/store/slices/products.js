import { API_URL } from "../../config";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    products:[]
}

export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts(state, action){
            state.products = action.payload
        },
        setIsLoading(state, action){
            state.isLoading = action.payload
        }
    }
})

export const productsFetch = (inputValue)=>{
    return async (dispatch)=>{
        const fetchRequest = async ()=>{
            dispatch(productsActions.setIsLoading(true))
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
                dispatch(productsActions.setIsLoading(false))
            })
            .catch((e)=>{
                console.log(e)
            })
        }
        await fetchRequest()
    }
}

export const productsActions = productsSlice.actions