import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : 'search');
  };
  return (
    <Form className="justify-content-center" onSubmit={submitHandler}>
      <InputGroup>
        <FormControl
          type="text"
          name="q"
          id="q"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Бараагаа хайна уу..."
          aria-label="Search Products"
          aria-describedby="button-search"
        ></FormControl>
        <Button id="button-search" variant="outline-primary" type="submit">
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
}
