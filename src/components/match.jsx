import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Match = ({ match }) => (
  <div>
    <Row>
      <Col className="card__match--left" xs={5}>
        {match.team1}
      </Col>
      <Col xs={2}>
        {match.score1}:{match.score2}
      </Col>
      <Col className="card__match--right" xs={5}>
        {match.team2}
      </Col>
    </Row>
    <Card.Text className="labels__header card__teams--gap">
      <span>{match.city}</span>
      {match.time}
    </Card.Text>
  </div>
);

export default Match;
