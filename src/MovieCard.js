import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: '18rem', margin: '15px' }}>
      <Card.Img variant="top" src={movie.posterURL} style={{ height: '400px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Badge bg="warning" text="dark">Rating: {movie.rating}/10</Badge>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;