import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import labels from '../assets/labels';

const Nav = () => (
  <div className="navigation">
    <Card>
      <Link to="/fixtures">
        <Button variant="warning">{labels.Fixtures}</Button>
      </Link>
      <Link to="group">
        <Button variant="secondary">{labels.Groups}</Button>
      </Link>
      <Button variant="danger" disabled>
        {labels.Knockout}
      </Button>
    </Card>
  </div>
);

export default Nav;
