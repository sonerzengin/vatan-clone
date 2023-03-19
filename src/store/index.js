import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart-slice";
import userReducer from "../features/user-slice";


const store = configureStore({
  reducer: { 
    user: userReducer,
    cart: cartSlice.reducer 
    },
});

export default store;
