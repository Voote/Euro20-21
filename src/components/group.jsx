import React from 'react';
import Card from 'react-bootstrap/Card';

const Group = () => (
  <div>
    <div>
      <Card bg="warning" text="dark" className="card__group">
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div>
      <Card bg="info" text="dark" className="card__group">
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div>
      <Card bg="light" text="dark" className="card__group">
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div>
      <Card bg="dark" text="dark" className="card__group">
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
);

export default Group;
