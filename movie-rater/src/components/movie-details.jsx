import React,{useState,useEffect} from "react";
import { FaRegStar } from "react-icons/fa";

export default function MovieDetails({movie}){
    if(movie)
    return(
        <div>
            { movie &&
            <div>
            <h1>{ movie.title}</h1>
            <p >{ movie.description}</p>
            <FaRegStar/>
            </div>}

            
        </div>
    )
}