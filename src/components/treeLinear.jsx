import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Col, Container, Row } from 'react-bootstrap';

import { statusType } from '../constants';
import { getTree } from '../actions';
import Match from './match';
import colorSwitch from './colorSwitch';
import LinearLoader from './Loading/linear-loader';

const TreeLinear = ({ getTree, tree, isTreeLoading }) => {
  const checkLoading = isTreeLoading;

  useEffect(() => {
    getTree();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let colorCounter = 0;
  let oldCounter = 4;
  let bgColor = '';
  const dayOfJune = 'th June';
  const secondJuly = 'nd July';
  const thirdJuly = 'rd July';
  const dayOfJuly = 'th July';

  const stage = (point) => tree.filter((round) => round.id === point);
  const roundOf16 = stage(1);
  const quaterFinals = stage(2);
  const semiFinals = stage(3);
  const final = stage(4);
  const matchesOf16 = roundOf16.map((m16) => m16.matches).flat();
  const matchesQuaterFinal = quaterFinals.map((mQF) => mQF.matches).flat();
  const matchesSemiFinal = semiFinals.map((mSF) => mSF.matches).flat();
  const matchOfFinal = final.map((mF) => mF.matches).flat();
  const reset = () => colorCounter >= colorSwitch.length && (colorCounter = 0);
  const overwriteWinners = (firstObj, secondObj, arrObj) => {
    (firstObj.winner === 1 && (firstObj.winner = firstObj.team1)) ||
      (firstObj.winner === 2 && (firstObj.winner = firstObj.team2));
    (secondObj.winner === 1 && (secondObj.winner = secondObj.team1)) ||
      (secondObj.winner === 2 && (secondObj.winner = secondObj.team2));
    arrObj.team1 = firstObj.winner;
    arrObj.team2 = secondObj.winner;
  };
  const colorPicker = () => {
    oldCounter === colorCounter && (colorCounter += 1);
    reset();
    bgColor = colorSwitch[colorCounter];
    oldCounter = colorCounter;
    colorCounter++;
  };

  return checkLoading ? (
    <LinearLoader />
  ) : (
    <Container fluid>
      <Row>
        {matchesOf16.map((match) => {
          const random = Math.floor(Math.random() * 2);
          colorCounter += random;
          reset();
          colorPicker();
          reset();

          return (
            <Col xs={12} md={6} lg={3} key={match.id} className="frame--both">
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
      <header style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <h1>Quater Finals</h1>
      </header>
      <Row className="App App__section">
        {matchesQuaterFinal.map((match) => {
          colorPicker();
          const primeDate =
            (match.date === 2 && `${match.day} ${match.date}${secondJuly}`) ||
            (match.date === 3 && `${match.day} ${match.date}${thirdJuly}`) ||
            console.log('Wrong match date');
          const matchArray = (team) =>
            matchesOf16.filter((matchOf16) => matchOf16.name === team);
          const match1Array = matchArray(match.team1);
          const match2Array = matchArray(match.team2);
          const winner = (filtredMatch) =>
            (filtredMatch.winner === 1 && filtredMatch.team1) ||
            filtredMatch.team2;
          const winner1 = winner(match1Array[0]);
          const winner2 = winner(match2Array[0]);
          overwriteWinners(match1Array[0], match2Array[0], match);

          return (
            <Col xs={12} md={6} lg={3} key={match.id} className="frame--both">
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
      <header style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <h1>Semi Finals</h1>
      </header>
      <Row className="App App__section">
        <Col xs={0} md={0} lg={3} />
        {matchesSemiFinal.map((match) => {
          colorPicker();
          const matchArray = (team) =>
            matchesQuaterFinal.filter((matchQF) => matchQF.name === team);
          const match1Array = matchArray(match.team1);
          const match2Array = matchArray(match.team2);
          overwriteWinners(match1Array[0], match2Array[0], match);

          return (
            <Col xs={12} md={6} lg={3} key={match.id} className="frame--both">
              <Card
                bg={bgColor}
                text="dark"
                className="card__knockout card__teams"
              >
                <Card.Header>
                  {match.day} {match.date}
                  {dayOfJuly}
                </Card.Header>
                <Card.Title>
                  <Match key={match.id} match={match} />
                </Card.Title>
              </Card>
            </Col>
          );
        })}
      </Row>
      <header style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <h1>Final</h1>
      </header>
      <Row className="App App__section">
        <Col xs={0} md={3} lg={4} />
        {matchOfFinal.map((match) => {
          colorPicker();
          const matchArray = (team) =>
            matchesSemiFinal.filter((matchQF) => matchQF.name === team);
          const match1Array = matchArray(match.team1);
          const match2Array = matchArray(match.team2);
          overwriteWinners(match1Array[0], match2Array[0], match);

          return (
            <Col xs={12} md={6} lg={4} key={match.id} className="frame--both">
              <Card
                bg={bgColor}
                text="dark"
                className="card__knockout card__teams"
              >
                <Card.Header>
                  {match.day} {match.date}
                  {dayOfJuly}
                </Card.Header>
                <Card.Title>
                  <Match key={match.id} match={match} />
                </Card.Title>
              </Card>
            </Col>
          );
        })}
        <Col xs={0} md={0} lg={4} />
      </Row>
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
