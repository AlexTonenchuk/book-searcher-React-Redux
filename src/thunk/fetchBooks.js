import { loadBooks, loadMore } from "../slices/booksSlice";
import { changeFound } from "../slices/foundSlice";
import { togleLoading } from "../slices/loadingSlice";


export const fetchBooks = (search, categorie, sort, buttonType) => (dispatch, getState) => {
  dispatch(togleLoading());
  let url;
  const startIndex = ( buttonType==='search'?0:getState().books.value.length );
  if ( categorie==='all' ) {
    url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&orderBy=${sort}&startIndex=${startIndex}&maxResults=30`
  } else {
    url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}+subject:${categorie}&orderBy=${sort}&startIndex=${startIndex}&maxResults=30`
  }
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (buttonType==='search'){
      dispatch(loadBooks(data.items));
      dispatch(changeFound(data.totalItems));
      dispatch(togleLoading());
    } else {
        dispatch(loadMore(data.items));
        dispatch(togleLoading());
    }
  })
}
  
