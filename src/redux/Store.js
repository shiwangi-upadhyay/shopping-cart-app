import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";


//iske andar input me ek object aata hai
export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    }
});