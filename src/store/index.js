import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart-slice";


const store = configureStore({
  reducer: { 
    
    cart: cartSlice.reducer 
    },
});

export default store;
