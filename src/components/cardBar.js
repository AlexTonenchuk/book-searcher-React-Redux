import React from "react";
import Book from "./book";
import Found from "./found";
import Cards from "./cards";
import LoadMore from "./loadMore";


export default function CardBar () {
    return (
        <div className="cardBar">
            <Book/>
            <Found/>
            <Cards/>
            <LoadMore/>
        </div>
    )
}


