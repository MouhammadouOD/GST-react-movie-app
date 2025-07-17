import React from 'react';
import { Row } from 'react-bootstrap';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <Row className="justify-content-center">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </Row>
  );
};

export default MovieList;