// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      // Filter out the item with the specified id
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
