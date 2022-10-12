import { configureStore } from "@reduxjs/toolkit";

import { productsSlice } from "./slices/products";
import { shoppingCartSlice } from "./slices/shoppingCart";

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        shoppingCart: shoppingCartSlice.reducer
    }
});

export default store