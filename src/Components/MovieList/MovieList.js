import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({ movies, inputS, star, active }) => {
  return (
    <div className="movies-list">
      {active === false
        ? movies
            .filter((movie) =>
              movie.title.toUpperCase().includes(inputS.toUpperCase())
            )
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)
        : movies
            .filter((movie) => movie.rate === star)
            .filter((movie) =>
              movie.title.toUpperCase().includes(inputS.toUpperCase())
            )
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)}
    </div>
  );
};

export default MovieList;
