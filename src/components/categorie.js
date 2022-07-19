import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectCategorie, changeCategorie } from '../slices/categorieSlice';

export default function Categorie () {
    const categorie = useSelector(selectCategorie);
    const dispatch = useDispatch();
    const onChange = (e) => dispatch(changeCategorie(e.target.value));
    return (
        <span className="categorie">
            <span>categories </span>
            <select 
                size = "1" 
                name = "categorie"
                defaultValue = { categorie }
                onChange = { onChange }>
                <option value = "all">all</option>
                <option value = "art">art</option>
                <option value = "biography">biography</option>
                <option value = "computers">computers</option>
                <option value = "history">history</option>
                <option value = "medical">medical</option>
                <option value = "poetry">poetry</option>
            </select>
        </span>
    )
}