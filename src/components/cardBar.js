import React from "react";
import Book from "./book";
import Found from "./found";
import Cards from "./cards";
import LoadMore from "./loadMore";
import Loader from "./loader";



export default function CardBar () {
    return (
        <div className="cardBar">
            <Loader/>
            <Book/>
            <Found/>
            <Cards/>
            <LoadMore/>
        </div>
    )
}


