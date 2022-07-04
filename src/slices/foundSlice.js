import { createSlice } from '@reduxjs/toolkit';

export const foundSlice = createSlice({
  name: 'found',
  initialState: {
    value: 0
  },
  reducers: {
    changeFound: (state, action) => {
      state.value = action.payload
    }
  }
});

export const foundReducer = foundSlice.reducer;
export const {changeFound} = foundSlice.actions;
export const selectFound = (state) => state.found.value;
