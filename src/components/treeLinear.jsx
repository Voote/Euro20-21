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

  const stage = (point) => tree.filter((round) => round.id === point);
  const roundOf16 = stage(1).flat();
  //   const quaterFinals = stage(2);
  //   const semiFinals = stage(3);
  //   const final = stage(4);
  const matchesOf16 = roundOf16.map((element) => element.matches).flat();

  return (
    <Container fluid>
      <Row>
        {matchesOf16.map((match) => {
          console.log(match.id % 2, match.name);

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
                  {match.day} {match.date}th June
                </Card.Header>
                <Card.Title>
                  <Match key={match.id} match={match} />
                </Card.Title>
              </Card>
            </Col>
          );
        })}
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
