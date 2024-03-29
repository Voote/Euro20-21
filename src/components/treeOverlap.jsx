import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Col, Container, Row } from 'react-bootstrap';

import { statusType } from '../constants';
import { getTree } from '../actions';
import colorSwitch from './colorSwitch';

const TreeOverlap = ({ getTree, tree }) => {
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
  const matchesOf16 = roundOf16
    .map((element) => element.matches)
    .flat()
    .sort((a, b) => a.id - b.id);

  return (
    <Container fluid>
      <Row>
        {matchesOf16.map((item) => {
          console.log(item.id % 2, item.name);

          const cardType = `card__r16 card__r16--type${
            item.id % 4
          } card__r16--block`;
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
          const colRight = (
            <Col xs={5} key={item.id}>
              <Card bg={bgColor} className={cardType}>
                <Card.Title>
                  <Row>
                    <Col xs={12} md={5}>
                      {item.team1}
                    </Col>
                    <Col>
                      {item.goals1} : {item.goals2}
                    </Col>
                    <Col xs={12} md={5}>
                      {item.team2}
                    </Col>
                  </Row>
                </Card.Title>
              </Card>
            </Col>
          );
          const colLeft = (
            <Col xs={7} key={item.id}>
              <Row>
                <Col xs={9}>
                  <Card bg={bgColor} className={cardType}>
                    <Card.Title>
                      <Row>
                        <Col xs={12} md={5}>
                          {item.team1}
                        </Col>
                        <Col>
                          {item.goals1} : {item.goals2}
                        </Col>
                        <Col xs={12} md={5}>
                          {item.team2}
                        </Col>
                      </Row>
                    </Card.Title>
                  </Card>
                </Col>
                <Col xs={3}>
                  <p style={{ marginTop: '5em' }}> VS </p>
                </Col>
              </Row>
            </Col>
          );
          const isRight = item.id % 2 ? colRight : colLeft;

          return isRight;
        })}
        <Col xs={0} md={1} />
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

TreeOverlap.defaultProps = {
  tree: [],
  isTreeLoading: false
};

TreeOverlap.propTypes = {
  fixtures: PropTypes.array,
  isTreeLoading: PropTypes.bool,
  getTree: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TreeOverlap);
