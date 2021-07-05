import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Col, Container, Row } from 'react-bootstrap';

import { statusType } from '../constants';
import { getTree } from '../actions';
import Match from './match';
import colorSwitch from './colorSwitch';

const TreeLinear = ({ getTree, tree }) => {
  useEffect(() => {
    getTree();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let colorCounter = 0;
  let oldCounter = 4;
  const dayOfJune = 'th June';
  const secondJuly = 'nd July';
  const thirdJuly = 'rd July';
  const dayOfJuly = 'th July';

  const stage = (point) => tree.filter((round) => round.id === point);
  const roundOf16 = stage(1);
  const quaterFinals = stage(2);
  //   const semiFinals = stage(3);
  //   const final = stage(4);
  const matchesOf16 = roundOf16.map((m16) => m16.matches).flat();
  const matchesQuaterFinal = quaterFinals.map((mQF) => mQF.matches).flat();

  return (
    <Container fluid>
      <Row>
        {matchesOf16.map((match) => {
          const random = Math.floor(Math.random() * 2);
          const reset = () =>
            colorCounter >= colorSwitch.length && (colorCounter = 0);
          colorCounter += random;
          reset();
          oldCounter === colorCounter && (colorCounter += 1);
          reset();
          const bgColor = colorSwitch[colorCounter];
          oldCounter = colorCounter;
          colorCounter++;
          reset();

          return (
            <Col xs={12} md={6} lg={4} key={match.id} className="frame--both">
              <Card
                bg={bgColor}
                text="dark"
                className="card__knockout card__teams"
              >
                <Card.Header>
                  {match.day} {match.date}
                  {dayOfJune}
                </Card.Header>
                <Card.Title>
                  <Match key={match.id} match={match} />
                </Card.Title>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Row className="App App__section">
        <header style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <h1>Quater Finals</h1>
        </header>

        {matchesQuaterFinal.map((match) => {
          oldCounter === colorCounter && (colorCounter += 1);
          colorCounter >= colorSwitch.length && (colorCounter = 0);
          const bgColor = colorSwitch[colorCounter];
          oldCounter = colorCounter;
          colorCounter++;

          const primeDate =
            (match.date === 2 && `${match.day} ${match.date}${secondJuly}`) ||
            (match.date === 3 && `${match.day} ${match.date}${thirdJuly}`) ||
            console.log('Wrong match date');

          const matchArray = (team) =>
            matchesOf16.filter((matchOf16) => matchOf16.name === team);
          const winner = (filtredMatch) =>
            (filtredMatch.winner === 1 && filtredMatch.team1) ||
            filtredMatch.team2;
          const match1Array = matchArray(match.team1);
          const match2Array = matchArray(match.team2);
          const winner1 = winner(match1Array[0]);
          const winner2 = winner(match2Array[0]);

          return (
            <Col xs={12} md={6} lg={4} key={match.id} className="frame--both">
              <Card
                bg={bgColor}
                text="dark"
                className="card__knockout card__teams"
              >
                <Card.Header>{primeDate}</Card.Header>
                <Card.Title>
                  <Match
                    key={match.id}
                    match={match}
                    team1={winner1}
                    team2={winner2}
                  />
                </Card.Title>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Row></Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  tree: state.tree.data,
  isTreeLoading: state.tree.status === statusType.loading
});

const mapDispatchToProps = (dispatch) => ({
  getTree: () => dispatch(getTree())
});

TreeLinear.defaultProps = {
  tree: [],
  isTreeLoading: false
};

TreeLinear.propTypes = {
  fixtures: PropTypes.array,
  isTreeLoading: PropTypes.bool,
  getTree: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TreeLinear);
