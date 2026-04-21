import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    additem: (state,action)=>{
      
      state.items.push(action.payload);
    },
    removeitem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearcart: (state) => {
      state.items = [];
    }
  }
});

export const { additem, removeitem, clearcart } = cartSlice.actions;
export default cartSlice.reducer;