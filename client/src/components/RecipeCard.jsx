import React from "react";
import { Card, Button } from "react-bootstrap";

const RecipeCard = ({ title, calories, image, ingredients }) => {
  return (
    <div className="container">
      <div className="container">
        <Card.Img variant="center" src={image} className="recipe-image" />
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default RecipeCard;
