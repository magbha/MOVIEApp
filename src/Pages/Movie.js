import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Movie.css";
import MovieCard from "../Components/MovieCard/MovieCard";
import { Button } from "react-bootstrap";

const Movie = ({ movies }) => {
  const navigate = useNavigate()
  const { movieId } = useParams();
  return (
    <div className="card-section">
      <div className="deCard">
        <div className="desCard">
          {movies
            .filter((card) => card.id == movieId)
            .map((card, index) => (
              <p key={index}>{card.description}</p>
            ))}
        </div>
        <Button variant="warning" onClick={() => navigate(-1)}>Go Back to Previous Page </Button>

      </div>
    </div>
  );
};

export default Movie;
