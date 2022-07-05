import React from "react";
import Search from './components/search'
import Categorie from './components/categorie'
import Sort from './components/sort'


export default function SearchBar () {
    return (
        <div className='searchBar'>
            <div><h1>Search for books</h1></div>
            <Search/>
            <div>           
                <Categorie/>
                <Sort/>
            </div>
        </div>
    )
}