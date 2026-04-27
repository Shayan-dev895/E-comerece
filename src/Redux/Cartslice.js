import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

// Save cart to localStorage
const saveToLocalStorage = (items) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

const initialState = {
  items: loadFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    // ADD ITEM
    additem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      saveToLocalStorage(state.items);
    },

    // REMOVE ITEM
    removeitem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      saveToLocalStorage(state.items);
    },

    // INCREASE QTY
    increaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;

      saveToLocalStorage(state.items);
    },

    // DECREASE QTY
    decreaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (i) => i.id !== action.payload
        );
      }

      saveToLocalStorage(state.items);
    },

    // CLEAR CART
    clearcart: (state) => {
      state.items = [];
      saveToLocalStorage(state.items);
    },
  },
});

export const {
  additem,
  removeitem,
  increaseQty,
  decreaseQty,
  clearcart,
} = cartSlice.actions;

export default cartSlice.reducer;