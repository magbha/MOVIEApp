import React, { useState } from 'react'
import { Routes , Route} from 'react-router-dom'
import { moviesData } from './Components/MovieData/Data'
import Error from './Pages/Error'
import Home from './Pages/Home'
import Movie from './Pages/Movie'

const Main = () => {
  const [active , setActive] = useState(false)
  const [movies, setMovies] = useState(moviesData);
  const [inputS, setInput] = useState("");
  const [star, setStar] = useState(1);

  return (
    <div>
    <Routes>
    <Route exaxt path="/" element={<Home active={active} setActive={setActive} movies={movies} setMovies={setMovies} inputS={inputS} setInput={setInput} star={star} setStar={setStar} />} />
    <Route exaxt path="/*" element={<Error/>} />
    <Route exaxt path="/movie/:movieId" element={<Movie movies={movies} />} />
    </Routes>
    </div>
  )
}

export default Main