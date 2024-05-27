// store.js
import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './imageSlice'; // Define el reducer para la imagen

export const store = configureStore({
  reducer: {
    image: imageReducer,
  },
});
