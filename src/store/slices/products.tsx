import { API_URL } from "../../config";
import { AnyAction, createSlice, ThunkDispatch } from "@reduxjs/toolkit";
import { ShoppingCart } from "./shoppingCart";

export type Product = {
    _id: string
    title: string
    price: number
}

type Filter = {
    minPrice?: number,
    maxPrice?: number
}

export type Products = {
    currentPage: number
    lastPage: number
    currentSearchValue: string
    isLoading: boolean
    hasError: boolean
    products: Product[],
    filter: Filter
}

const initialState:Products = {
    currentPage: 1,
    lastPage: 0,
    currentSearchValue: "",
    isLoading: false,
    hasError: false,
    products: [],
    filter: {}
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
        },
        setFilter(state, action){
            state.filter = action.payload
        }
    }
})



type ThunkAction<
  R, // Return type of the thunk function
  S, // state type used by getState
  E, // any "extra argument" injected into the thunk
  A extends AnyAction // known types of actions that can be dispatched
> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R

export const productsFetch = (inputValue: string, page: number, fromPageChnage = false, fromPageFilter = false,  filter:Filter = {}):
ThunkAction<void,{shoppingCart: ShoppingCart, products: Products}, unknown, AnyAction>=>{
    return async (
    dispatch, 
    getState,
    )=>{
        const currentState = getState()
        let searchValue:string
        if(fromPageChnage){
            searchValue = currentState.products.currentSearchValue
        }
        else if(fromPageFilter){
            searchValue = currentState.products.currentSearchValue
            page = currentState.products.currentPage
        }
        else{
            filter = currentState.products.filter
            searchValue = inputValue
            dispatch(productsActions.setCurrentSearchValue(inputValue))
        }

        const fetchRequest = async ()=>{
            dispatch(productsActions.setIsLoading(true))
            return fetch(`${API_URL}/products`,{
                method: 'POST',
                body: JSON.stringify({
                    title: searchValue,
                    page: page,
                    filter
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
            dispatch(productsActions.setIsLoading(true))
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