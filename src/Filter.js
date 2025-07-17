import React from 'react';
import { Form, InputGroup, FloatingLabel } from 'react-bootstrap';

const Filter = ({ filterTitle, filterRating, onFilterChange }) => {
  return (
    <div className="mb-4">
      <InputGroup className="mb-3">
        <FloatingLabel label="Filter by Title">
          <Form.Control
            type="text"
            placeholder="Filter by title"
            value={filterTitle}
            onChange={(e) => onFilterChange('title', e.target.value)}
          />
        </FloatingLabel>
      </InputGroup>

      <FloatingLabel label="Filter by Rating (min)">
        <Form.Control
          type="number"
          min="0"
          max="10"
          placeholder="Filter by rating"
          value={filterRating}
          onChange={(e) => onFilterChange('rating', e.target.value)}
        />
      </FloatingLabel>
    </div>
  );
};

export default Filter;