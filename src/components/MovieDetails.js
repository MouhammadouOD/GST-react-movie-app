import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(movie => movie.title === id);

  return (
    <Container className="mt-5">
      <Button variant="primary" onClick={() => navigate('/')} className="mb-4">
        Back to Home
      </Button>
      
      {movie && (
        <Card>
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <div className="ratio ratio-16x9 mb-4">
              <iframe 
                src={movie.trailerLink} 
                title="YouTube video" 
                allowFullScreen
              ></iframe>
            </div>
            <Card.Text>{movie.description}</Card.Text>
            <Card.Text>
              <strong>Rating:</strong> {movie.rating}/10
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default MovieDetails;