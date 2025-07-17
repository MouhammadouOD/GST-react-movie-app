import React, { useState } from 'react';
import { Button, Form, Modal, FloatingLabel } from 'react-bootstrap';

const AddMovie = ({ onAddMovie }) => {
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onAddMovie({
      ...newMovie,
      rating: parseFloat(newMovie.rating)
    });
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: ''
    });
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="mb-4">
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel label="Title" className="mb-3">
            <Form.Control
              type="text"
              name="title"
              value={newMovie.title}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel label="Description" className="mb-3">
            <Form.Control
              as="textarea"
              name="description"
              value={newMovie.description}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel label="Poster URL" className="mb-3">
            <Form.Control
              type="text"
              name="posterURL"
              value={newMovie.posterURL}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel label="Rating (1-10)" className="mb-3">
            <Form.Control
              type="number"
              min="1"
              max="10"
              step="0.1"
              name="rating"
              value={newMovie.rating}
              onChange={handleChange}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;