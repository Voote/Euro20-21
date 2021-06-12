import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Nav = () => (
  <div className="navigation">
    <Card>
      <Link to="/fixtures">
        <Button variant="warning">Fixtures</Button>
      </Link>
      <Link to="group">
        <Button variant="info">Groups</Button>
      </Link>
      <Button variant="danger" disabled>
        Knockout
      </Button>
    </Card>
  </div>
);

export default Nav;
