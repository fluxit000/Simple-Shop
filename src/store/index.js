import { configureStore } from "@reduxjs/toolkit";

import { productsSlice } from "./slices/products";

const store = configureStore({
    reducer: productsSlice.reducer
});

export default store