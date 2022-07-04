import { createSlice } from '@reduxjs/toolkit';

export const categorieSlice = createSlice({
  name: 'categorie',
  initialState: {
    value: 'all'
  },
  reducers: {
    changeCategorie: ( state, action ) => {
      state.value = action.payload
    }
  }
});

export const categorieReducer = categorieSlice.reducer;
export const { changeCategorie } = categorieSlice.actions;
export const selectCategorie = ( state ) => state.categorie.value;
