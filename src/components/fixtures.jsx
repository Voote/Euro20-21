import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Col, Container, Row } from 'react-bootstrap';
import { statusType } from '../constants';
import { getFixtures } from '../actions';
import colorSwitch from './colorSwitch';

const Fixtures = ({ getFixtures, fixtures }) => {
  useEffect(() => {
    getFixtures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let previousDate;
  let colorCounter = -1;

  return (
    <Container fluid>
      <Row>
        {fixtures.map((match) => {
          const dayJune = 'th June';
          const utc = ' (UTC)';
          const cardHeader = (
            <Card.Header>
              {match.day} {match.date}
              {dayJune}
            </Card.Header>
          );
          previousDate !== match.date && colorCounter++;
          const dateHeader = previousDate !== match.date && cardHeader;
          previousDate = match.date;
          colorCounter >= colorSwitch.length && (colorCounter = 0);
          const bgColor = colorSwitch[colorCounter];
          return (
            <Col xs={12} md={6} xl={4} key={match.id}>
              <Card
                key={match.id}
                bg={bgColor}
                text="dark"
                className="card__match"
              >
                {dateHeader}
                <Card.Body>
                  <Card.Title>
                    {match.matches.map((match) => {
                        return (
                          <Row key={match.id}>
                            <Col xs={5}>{match.team1}</Col>
                            <Col xs={2}>{match.score1}:{match.score2}</Col>
                            <Col xs={5}>{match.team2}</Col>
                            <Card.Footer>
                              {match.city} {match.time} {utc}
                            </Card.Footer>
                          </Row>
                        );
                    })}
                  </Card.Title>
                  <div className="card__border" />
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  fixtures: state.fixtures.data,
  isFixturesLoading: state.fixtures.status === statusType.loading
});

const mapDispatchToProps = (dispatch) => ({
  getFixtures: () => dispatch(getFixtures())
});

Fixtures.defaultProps = {
  fixtures: [],
  isFixturesLoading: false
};

Fixtures.propTypes = {
  fixtures: PropTypes.array,
  isFixturesLoading: PropTypes.bool,
  getFixtures: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Fixtures);
