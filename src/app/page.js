import HomeHeader from "@/components/HomeHeader";
import MovieCard from "@/components/MovieCard";
import { movieDB } from "@/database/movies";

export default function Home() {
  return (
    <section className="bg-slate-800 min-h-screen overflow-x-hidden">
      <section className="max-w-[1200px] mx-auto border-2 border-red-500">
        <header className="mt-14">
          <HomeHeader/>
        </header>
        <main className="mt-4 grid-cols-4 grid gap-4">
          {
            movieDB.map((movie, i)=>{
              return(
                <MovieCard
                  key = {i} 
                  movie = {movie}
                />
              )
            })
          }
        </main>
      </section>
      
      
    </section>
  );
}
