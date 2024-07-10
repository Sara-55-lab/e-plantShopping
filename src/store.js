import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreatSlice';

const store = configureStore({
    reducer: {
      cart: cartReducer, // Associate cartReducer with the 'cart' slice of the state
      // Add more reducers if needed
    },
  });
export default store