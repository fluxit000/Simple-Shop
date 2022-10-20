import { API_URL } from "../../config";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: -1,
    lastPage: -1,
    currentSearchValue: "",
    isLoading: false,
    hasError: false,
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
        },
        setHasError(state, action){
            state.hasError = action.payload
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
            return fetch(`${API_URL}/products`,{
                method: 'POST',
                body: JSON.stringify({
                    title: searchValue,
                    page: page
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response)=>{
                if(!response.ok){
                    throw new Error("Backend error")
                }
                return response.json()
            })
            .then((response)=>{
                dispatch(productsActions.setHasError(false)) 
                dispatch(productsActions.setIsLoading(false))
                if(page === 1){
                    dispatch(productsActions.initPage(response.lastPage))
                }
                else{
                    dispatch(productsActions.setCurrentPage(page))
                }
                dispatch(productsActions.setProducts(response.items))
            })
        }

        try{
            await fetchRequest()
        }
        catch(error){
            dispatch(productsActions.setProducts([]))
            dispatch(productsActions.setIsLoading(false))
            dispatch(productsActions.setHasError(true)) 
        }
    }
}

export const productsActions = productsSlice.actions