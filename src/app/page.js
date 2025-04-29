import Image from "next/image";
import MovieCard from "./Component/MovieCard";


export default function Home() {
 
  return (
  <section>
    <h1>Movie List</h1>
    <div className="moviecard">
        <MovieCard
          moviePoster="https://m.media-amazon.com/images/I/81218n6JFgL.jpg"
          movieName="Oppenheimer"
          movieRelease="21 July 2023"
        />
        </div> 
        <div className="moviecard">
        <MovieCard
            moviePoster="https://image.tmdb.org/t/p/original/wWJbBo5yjw22AIjE8isBFoiBI3S.jpg"
            movieName="The Godfather"
            movieRelease="24 March 1972"   
        />
        </div>
        <div className="moviecard">
        <MovieCard
            moviePoster="https://cdn.kinocheck.com/i/m2s0jjjwgk.jpg"
            movieName="Parasite"
            movieRelease="30 May 2019 "   
        /> 
        
    </div>
  </section>
  );
}
