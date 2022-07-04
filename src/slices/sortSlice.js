import { createSlice } from '@reduxjs/toolkit';

export const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    value: 'relevance'
  },
  reducers: {
    changeSort: ( state, action ) => {
      state.value = action.payload
    }
  }
});

export const sortReducer = sortSlice.reducer;
export const { changeSort } = sortSlice.actions;
export const selectSort = ( state ) => state.sort.value;
