import React from 'react';

export const MovieRating = ({ rating }) => {
  return (
    <div className="movie-rating">
      <p>Movie Rating: {rating} / 5</p>
      <p>
        {Array.from({ length: rating }, (_, i) => (
          <span key={i}>⭐</span>
        ))}
      </p>
    </div>
  );
};
