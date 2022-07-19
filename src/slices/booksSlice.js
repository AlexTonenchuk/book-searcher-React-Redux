import { createSlice } from '@reduxjs/toolkit'

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    value: []
  },
  reducers: {
    loadBooks: (state, action) => {
      state.value = [];
      state.value = this.concatWithoutRepeat(state.value, action.payload);
    },
    loadMore: (state, action) => {
      function concatWithoutRepeat (arr1, arr2=[]) {
        let arr3 = [...arr1];
          arr2.forEach((iArr2) => {
              if (arr3.find((iArr1) => {
                return (iArr1.id===iArr2.id)
              })) { } else {arr3.push(iArr2)}
          });
        return arr3
      };
      state.value = concatWithoutRepeat(state.value, action.payload);
    }
  }
});

export const booksReducer = booksSlice.reducer;
export const {loadBooks, loadMore} = booksSlice.actions;
export const selectBooks = (state) => state.books.value;