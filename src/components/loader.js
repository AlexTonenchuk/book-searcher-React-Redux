import React from "react";
import { useSelector } from "react-redux";
import { selectLoading } from "../slices/loadingSlice";

export default function Loader () {
    const loading = useSelector(selectLoading);
    if (loading===false) {return null};
    return (
        <div className="loader">
            loading...
        </div>
    )
}