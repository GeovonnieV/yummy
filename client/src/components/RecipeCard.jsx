import React, {useState} from "react";
import { Card, Button, Modal } from "react-bootstrap";

const RecipeCard = ({ title, calories, image, ingredients, carbs, fats, protein }) => {
  // state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

console.log(carbs)
  // JSX
  return (
    <div className="container">
      <div className="container">
        <Card.Img variant="center" src={image} className="recipe-image" />
        <Card style={{ width: "18rem" }}>
          <Card.Body className="recipe-card">
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              calories({Math.round(calories)})
            </Card.Text>
            {/* modal */}
            <Button style={{"background": "white", "borderColor": "coral", "color": "coral"}} onClick={handleShow}>
        Recipe
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Macros(Carbs: {carbs}g, Fats: {fats}g, Protein: {protein}g)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul>
                {
                    ingredients.map((ingredient) => (
                     <ol>{ingredient.text}</ol>
                    ))
                }
            

            </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            More Detail
          </Button>
        </Modal.Footer>
      </Modal>
            {/* modal end */}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default RecipeCard;