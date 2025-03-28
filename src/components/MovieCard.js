import React from 'react'

const MovieCard = ({movie}) => {
  console.log(movie)
  return (
    <div className='bg-white/50 backdrop-blur-md p-2 rounded-md shadow-md'>
      <div className='overflow-hidden rounded-md shadow-sm'>
        <img src={`/assets/images${movie.moviePoster}`} alt="Movie Poster" className='w-full h-full object-cover'/>
      </div>
      <div>
        <h3 className=' text-teal-800 text-center mt-2 text-xl font-semibold tracking-wide whitespace-nowrap text-ellipsis overflow-hidden w-[90%] mx-auto'>{movie.movieName}</h3>
      </div>
    </div>
  )
}

export default MovieCard