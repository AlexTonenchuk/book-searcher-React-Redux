import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from '../slices/searchSlice';
import { categorieReducer } from '../slices/categorieSlice';
import { sortReducer } from '../slices/sortSlice';
import { booksReducer } from '../slices/booksSlice';
import { foundReducer } from '../slices/foundSlice';
import { idReducer } from '../slices/idSlice';
import { loadingReducer } from '../slices/loadingSlice';



export const store = configureStore({
  reducer: {
    search: searchReducer,
    categorie: categorieReducer,
    sort: sortReducer,
    books: booksReducer,
    found: foundReducer,
    id: idReducer,
    loading: loadingReducer,
  },
});
