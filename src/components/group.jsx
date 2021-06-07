import React from 'react';
import Card from 'react-bootstrap/Card';
import maches from './test';

const Group = () => (
  <div>
    {maches.map(match=> 
    match.date%2 ?     
      <Card bg="warning" text="dark" className="card__group">
        <Card.Header>{match.date}th June</Card.Header>
        <Card.Body>
          <Card.Title>{match.team1} ({match.score1}) vs ({match.score2}) {match.team2}</Card.Title>
          <Card.Text>{match.city} {match.time}</Card.Text>
        </Card.Body>
      </Card>
    :
      <Card bg="info" text="dark" className="card__group">
      <Card.Header>{match.date}th June</Card.Header>
      <Card.Body>
        <Card.Title>{match.team1} ({match.score1}) vs ({match.score2}) {match.team2}</Card.Title>
        <Card.Text>{match.city} {match.time}</Card.Text>
      </Card.Body>
      </Card>
    )}
  </div>
);

export default Group;
