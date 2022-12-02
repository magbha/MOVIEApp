import React from "react";
import { useParams } from "react-router-dom";
import './Movie.css';
import MovieCard from "../Components/MovieCard/MovieCard";

const Movie = ({ movies }) => {
  const { movieId } = useParams();
  return (
    <div className="card-section">
      {movies
        .filter(card => card.id == movieId)
        .map((card, index) => (
        <MovieCard className="moviecard" movie={card} key={index} />
      ))}
    </div>
  );
};

export default Movie;
