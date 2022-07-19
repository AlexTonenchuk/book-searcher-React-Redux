import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectSearch, changeSearch } from '../slices/searchSlice';
import { selectCategorie } from '../slices/categorieSlice';
import { selectSort } from '../slices/sortSlice';
import { fetchBooks } from "../thunk/fetchBooks";
import { changeID } from "../slices/idSlice";


export default function Search () {
    const search = useSelector(selectSearch);
    const categorie = useSelector(selectCategorie);
    const sort = useSelector(selectSort);
    const dispatch = useDispatch();
    const onChange = (e) => dispatch(changeSearch(e.target.value));
    const onSubmit = (e) => {
        e.preventDefault();
        if (search) {
            dispatch(changeID(''));
            dispatch(fetchBooks(search, categorie, sort, e.target.name));
        } else {
            return null
        }
    };
    return (
        <div className="search">
            <form
                name = 'search'
                onSubmit={ onSubmit }>
                <input
                    type = "text"
                    placeholder = 'input book'
                    value = {search}
                    onChange = {onChange}/>
                <button>
                search
                </button>
            </form>
        </div>
    )
}

