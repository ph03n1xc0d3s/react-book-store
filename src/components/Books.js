import React from "react";
import { Button, Card } from "react-bootstrap";

const Books = ({ img, name, rating, author }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img height={300} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{author}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
        <Button variant="dark" size="sm">Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default Books;
