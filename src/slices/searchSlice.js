import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: ''
  },
  reducers: {
    changeSearch: (state, action) => {
      state.value = action.payload
    }
  }
});

export const searchReducer = searchSlice.reducer;
export const {changeSearch} = searchSlice.actions;
export const selectSearch = (state) => state.search.value;
