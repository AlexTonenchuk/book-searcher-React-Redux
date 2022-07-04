import { createSlice } from '@reduxjs/toolkit';

export const idSlice = createSlice({
  name: 'id',
  initialState: {
    value: ''
  },
  reducers: {
    changeID: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const idReducer = idSlice.reducer;
export const {changeID} = idSlice.actions;
export const selectID = (state) => state.id.value;

