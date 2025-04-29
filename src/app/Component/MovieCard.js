"use client";
import React, {useState} from "react";  
import {MovieRating} from "./MovieRating";
import AddRating from "./AddRating";


  export default function MovieCard(props) {
    const[rating, setRating] = useState(0);
    return (
      <div>
        <img src={props.moviePoster} alt="movie-poster"/>
        <h4>{props.movieName}</h4>
        <p>{props.movieRelease}</p>
        <MovieRating rating={rating} />
        <AddRating setRating={setRating}/>
      </div>
    );
  }