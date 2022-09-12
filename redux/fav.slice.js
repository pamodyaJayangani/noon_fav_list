import { createSlice } from '@reduxjs/toolkit';

const favSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToFav: (state, action) => {
     /* const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity++;
      } else {*/
        state.push({ ...action.payload, quantity: 1 });
     // }
    },
    /*incrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
      } else {
        item.quantity--;
      }
    },*/
    removeFromFav: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = favSlice.reducer;

export const {
  addToFav,
  incrementQuantity,
  decrementQuantity,
  removeFromFav,
} = favSlice.actions;