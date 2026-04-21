import { configureStore } from "@reduxjs/toolkit";
import ProductSliceReducer from "./Productslice";
import cartReducer from "./Cartslice"; // Naam consistent rakhein

const store = configureStore({
    reducer: {
        cart: cartReducer, // Isay cartReducer kehna behtar hai
        Product: ProductSliceReducer
    }
});

export default store;