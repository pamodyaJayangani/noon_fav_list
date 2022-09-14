import { createSlice } from '@reduxjs/toolkit';

const favSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToFav: (state, action) => {
      const itemExists = state.find((item) => item.payload === action.payload);
      if (!itemExists) {
        state.push({...action});
      } 
    },
    
    removeFromFav: (state, action) => {
      const index = state.findIndex((item) => item.payload === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = favSlice.reducer;

export const {
  addToFav,  
  removeFromFav,
} = favSlice.actions;