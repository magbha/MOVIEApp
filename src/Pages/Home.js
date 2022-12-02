import "./App.css";

import React from "react";
import MovieList from "../Components/MovieList/MovieList";
import MovieAdd from "../Components/MovieAdd/MovieAdd";
import MovieFilter from "../Components/MovieFilter/MovieFilter";


function Home({active , setActive ,movies, setMovies, inputS, setInput , star, setStar}) {  

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  


    return (
    <div className="App">
    
      <MovieFilter  setStar={setStar} setActive={setActive} active={active} inputS={inputS} setInput={setInput} />
      <MovieList active={active} star={star} movies={movies} inputS={inputS} />
      <MovieAdd add={add} />
    </div>
  );
}

export default Home;
