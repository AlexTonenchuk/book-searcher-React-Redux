import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectSearch } from '../slices/searchSlice';
import { selectCategorie } from '../slices/categorieSlice';
import { selectSort } from '../slices/sortSlice';
import { fetchBooks } from "../thunk/fetchBooks";

export default function LoadMore () {
    const search = useSelector(selectSearch);
    const categorie = useSelector(selectCategorie);
    const sort = useSelector(selectSort);
    const dispatch = useDispatch();
    const onClick = () => {
        if (search) {
            dispatch(fetchBooks(search, categorie, sort, null));
        } else {return null}
    };
    return (
        <div className="loadMore">
            <button onClick={onClick}>
                LoadMore
            </button>
        </div>
    )
}