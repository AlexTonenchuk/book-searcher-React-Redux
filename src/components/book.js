import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectID } from "../slices/idSlice";
import { selectBooks } from "../slices/booksSlice";
import { changeID } from "../slices/idSlice";


export default function Book () {
    const id = useSelector(selectID);
    const books = useSelector(selectBooks);
    const dispatch = useDispatch();
    const onClick = () => dispatch(changeID(''))
    const classes = `${id?'book':''}`
    if (id) {
        const index = books.findIndex((i) => i.id === id );
        const book = books[index];
        return (
            <div className = {classes}>
                
                <div className="close">
                    <button 
                        onClick={onClick}>
                        close
                    </button>
                </div>
                <div className="wrap">
                    <div className="imgWrap">
                        <img    
                            src={book.volumeInfo.imageLinks.thumbnail || ''} 
                            alt="not img">
                        </img>
                    </div>
                    <div className="bookContent" >
                        <div className="categorieBook"> 
                            {book.volumeInfo.categories || 'categories:'} 
                        </div>
                        <div className="titleBook">
                            <h2>
                                {book.volumeInfo.title || 'title:'}
                            </h2>
                        </div>
                        <div className="authorsBook">
                            {book.volumeInfo.authors || 'authors:'}
                        </div>
                        <div className="description">
                            {book.volumeInfo.description || 'description:'}
                        </div>
                    </div>
                </div>
            </div>
        ) 
    } else { return null };
}
