import React from "react";
import { useSelector } from 'react-redux';
import { selectFound } from '../slices/foundSlice';


export default function Found () {
    const amount = useSelector(selectFound);
    return (
        <div    className="found">
                Found {amount} results 
        </div>
    )
}