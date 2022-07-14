import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectSort, changeSort } from '../slices/sortSlice';

export default function Sort () {
    const sort = useSelector(selectSort);
    const dispatch = useDispatch();
    const onChange = (e) =>dispatch(changeSort(e.target.value));
    return (
        <span className="sort">
            <span>sort </span>
            <select 
                size="1" 
                name="sort"
                defaultValue = { sort }
                onChange = { onChange }>
                <option value="relevance">relevance</option>
                <option value="newest">newest</option>
            </select>
        </span>
    )
}