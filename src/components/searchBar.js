import React from "react";
import Search from './search'
import Categorie from './categorie'
import Sort from './sort'


export default function SearchBar () {
    return (
        <div className='searchBar'>
            <div><h2>Book searcher</h2></div>
            <Search/>
            <div>           
                <Categorie/>
                <Sort/>
            </div>
        </div>
    )
}