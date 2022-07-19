import { loadBooks, loadMore } from "../slices/booksSlice";
import { changeFound } from "../slices/foundSlice";
import { togleLoading } from "../slices/loadingSlice";


export const fetchBooks = (search, categorie, sort, buttonType) => (dispatch, getState) => {
  const startIndex = buttonType==='search' ? 0 : getState().books.value.length;
  const subject = categorie==='all' ? '' : `subject:${categorie}`;
  const url = `https://www.googleapis.com/books/v1/volumes?
              q=intitle:${search}
              +${subject}
              &orderBy=${sort}
              &startIndex=${startIndex}
              &maxResults=30`;
  dispatch(togleLoading());
  fetch(url)
  .then((response) => {
    if (!response.ok){
      throw new Error('ERROR: response.status is not ok.')
    };
    return response.json();
  })
  .then((data) => {
    if (buttonType==='search'){
      dispatch(loadBooks(data.items));
      dispatch(changeFound(data.totalItems));
    } else {
        dispatch(loadMore(data.items));
    }
  })
  .catch((error) => alert(error))
  .finally(() => dispatch(togleLoading()))
};
  
