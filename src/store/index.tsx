import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { productsSlice } from "./slices/products";
import { shoppingCartSlice } from "./slices/shoppingCart";

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        shoppingCart: shoppingCartSlice.reducer
    }
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>

export default store