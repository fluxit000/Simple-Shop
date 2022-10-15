import { API_URL } from "../../config";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: -1,
    lastPage: -1,
    currentSearchValue: "",
    isLoading: false,
    products: []
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
        },
        initPage(state, action){
            state.currentPage = 1
            state.lastPage = action.payload
        },
        setCurrentPage(state, action){
            state.currentPage = action.payload
        },
        setCurrentSearchValue(state, action){
            state.currentSearchValue = action.payload
        }
    }
})

export const productsFetch = (inputValue, page, fromPageChnage = false)=>{
    return async (dispatch, getState)=>{
        let searchValue
        if(fromPageChnage){
            searchValue = getState().products.currentSearchValue
        }
        else{
            searchValue = inputValue
            dispatch(productsActions.setCurrentSearchValue(inputValue))
        }
        const fetchRequest = async ()=>{
            dispatch(productsActions.setIsLoading(true))
            fetch(`${API_URL}/products`,{
                method: 'POST',
                body: JSON.stringify({
                    title: searchValue,
                    page: page
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response)=>response.json())
            .then((response)=>{
                if(page === 1){
                    dispatch(productsActions.initPage(response.lastPage))
                }
                else{
                    dispatch(productsActions.setCurrentPage(page))
                }
                dispatch(productsActions.setProducts(response.items))
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