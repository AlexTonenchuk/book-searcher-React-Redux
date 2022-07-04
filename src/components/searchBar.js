import React from "react";
import Search from './search'
import Categorie from './categorie'
import Sort from './sort'


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