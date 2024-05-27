import { createSlice } from '@reduxjs/toolkit';

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    uri: null, // Estado inicial de la URI de la imagen
  },
  reducers: {
    setImageUri: (state, action) => {
      state.uri = action.payload; // Actualiza el estado con la nueva URI de la imagen
    },
  },
});

export const { setImageUri } = imageSlice.actions;

export default imageSlice.reducer;