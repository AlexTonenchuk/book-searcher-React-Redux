import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    value: false
  },
  reducers: {
    togleLoading: (state) => {
      state.value = !state.value
    }
  }
});

export const loadingReducer = loadingSlice.reducer;
export const {togleLoading} = loadingSlice.actions;
export const selectLoading = (state) => state.loading.value;
