import Image from "next/image";
import MovieRating from "./MovieRating";

  
  export default function MovieCard(props) {
    return (
      <div>
        <img src={props.moviePoster} alt="movie-poster"/>
        <h4>{props.movieName}</h4>
        <p>{props.movieRelease}</p>
        <MovieRating movieRating={props.movieRating}/>
      </div>
    );
  }