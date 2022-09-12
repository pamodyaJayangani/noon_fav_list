import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './fav.slice';

const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer,
});

export default store;