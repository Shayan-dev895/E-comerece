import { configureStore } from "@reduxjs/toolkit";
import ProductSliceReducer from "./Productslice"



const store=configureStore({
    reducer:{
        Product:ProductSliceReducer
    }
    
})

export default store