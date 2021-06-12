import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Col, Row } from 'react-bootstrap';
import { statusType } from '../constants';
import { getFixtures } from '../actions';

const colorSwitch = (param) => {
  switch (param) {
    case 1:
      return 'dark';
    case 2:
      return 'info';
    default:
      return 'warning';
  }
};

const Fixtures = ({ getFixtures, fixtures }) => {
  useEffect(() => {
    getFixtures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let previousDate;

  return (
    <div>
      {fixtures.map((match) => {
        const dayJune = 'th June';
        const utc = ' (UTC)';
        const cardHeader = (
          <Card.Header>
            {match.day} {match.date}
            {dayJune}
          </Card.Header>
        );
        const bgColor = colorSwitch(match.date % 3);
        const dateHeader = previousDate !== match.date && cardHeader;
        previousDate = match.date;

        return (
          <Card key={match.id} bg={bgColor} text="dark" className="card__match">
            {dateHeader}
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col xs={5}>{match.team1}</Col>
                  <Col xs={2}>
                    {match.score1}:{match.score2}
                  </Col>
                  <Col xs={5}>{match.team2}</Col>
                </Row>
              </Card.Title>
              <Card.Text>
                {match.city} {match.time}
                {utc}
              </Card.Text>
              <div className="card__border" />
            </Card.Body>
          </Card>
        );
      })}
    </div>
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
