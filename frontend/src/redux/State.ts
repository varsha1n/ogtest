import { createSlice } from "@reduxjs/toolkit";

type cartType={
    id:string,
    img: string,
    title: string,
    price: number,
    rating:number,
    color: string,
    quantity:number,
}

const cartState:cartType[] = [{
    id:"",
    img: '',
    title: '',
    price: 0,
    rating:0,
    color: '',
    quantity:0,
}];

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addToCart: (state, action) => {
        const itemInCart = state.find((item) => item.id === action.payload.id);
        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          state.push({ ...action.payload, quantity: 1 });
        }
      },
  
      incrementQuantity: (state, action) => {
        const item:any = state.find((item) => item.id === action.payload);
        item.quantity++ ;
      },

      decrementQuantity: (state, action) => {
        const item:any = state.find((item) => item.id === action.payload);
        // if (item?.quantity === 1) {
        //   item.quantity = 1
        // } else {
          item.quantity--;
        // }
      },

      removeItem: (state, action) => {
          const removeItem = state.filter((item) => item.id != action.payload);
          console.log(removeItem)
        state = removeItem;
      },
  },
});

export const CState = cartState;
export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
