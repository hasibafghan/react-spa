import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CourseItem(props) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary">خرید دوره</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default CourseItem;
