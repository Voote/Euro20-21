import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Match = ({ match, team1, team2 }) => {
  const firstTeam = team1 || match.team1;
  const secondTeam = team2 || match.team2;
  console.log(firstTeam, secondTeam);
  return (
    <div>
      <Row>
        <Col className="card__match--left" xs={5}>
          {firstTeam}
        </Col>
        <Col xs={2}>
          {match.score1}:{match.score2}
        </Col>
        <Col className="card__match--right" xs={5}>
          {secondTeam}
        </Col>
      </Row>
      <Card.Text className="labels__header card__teams--gap">
        <span>{match.city}</span>
        {match.time}
      </Card.Text>
    </div>
  );
};

export default Match;
