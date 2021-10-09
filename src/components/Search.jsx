import { withRouter } from "react-router";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Search = ({ location }) => {
  return (
    location.pathname !== "/home" && (
      <>
        <Card  className="p-0" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./images/Wizkid.jpeg" />
          <Card.Body>
            <Card.Title className="text-light">Card Title</Card.Title>
            <Card.Text className="text-light">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  );
};

export default withRouter(Search);
