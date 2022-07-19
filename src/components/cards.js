import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBooks } from "../slices/booksSlice";
import { changeID } from "../slices/idSlice";


export default function Cards () {
    const books = useSelector(selectBooks);
    const dispatch = useDispatch();
    const onClick = (e) => {
        dispatch(changeID(e.currentTarget.id))
    }
    const elements = books.map((item) => {
        if (item &&
            item.volumeInfo && 
            item.volumeInfo.imageLinks) { 
            return (
                <li className="card" 
                    key={item.id}
                    id={item.id}
                    onClick={onClick}>
                    <div className="imgWrap">
                        <img src={item.volumeInfo.imageLinks.thumbnail || ''} 
                             alt="lorem">
                        </img>
                    </div>
                    <div className="categories"> 
                        {item.volumeInfo.categories || 'Categories: unknown'} 
                    </div>
                    <div className='title'> 
                        {item.volumeInfo.title || 'Title: unknown'} 
                    </div>
                    <div className="authors"> 
                        {item.volumeInfo.authors || 'Authors: unknown'} 
                    </div>
                </li>
            );
        } else {
            return null
        }
    });
    return (<ul className="cards"> {elements} </ul>);
};