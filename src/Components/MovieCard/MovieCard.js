import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./Card.css";




const MovieCard = ({ movie }) => {

const firstExample = {
  count: 5,
  size: 40,
  value: movie.rate,
  edit: false,
};

  return (
    <div>
      <Card  style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <ReactStars classNames={"rate"} {...firstExample}/>
           <a target="blank" href={movie.trailer}><Button variant="primary">Whatch Trailer</Button></a>
           <Link to={`/movie/${movie.id}`} ><Button>Description</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;