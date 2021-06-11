import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Nav = () => (
  <div className="navigation">
    <Link to="/fixtures">
      <Button variant="warning">Fixtures</Button>
    </Link>
    <Link to="group">
      <Button variant="info">Groups</Button>
    </Link>
  </div>
);

export default Nav;
