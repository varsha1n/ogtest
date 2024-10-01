import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./State";

const dataStore = configureStore({
  reducer: { cartReducer: cartSlice },
});

export default dataStore;
