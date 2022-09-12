import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

function SearchBox() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const sumbitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate(`/`);
    }

    setKeyword("");
  };

  return (
    <Form onSubmit={sumbitHandler} className="d-flex ">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="me-auto"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  );
}

export default SearchBox;
