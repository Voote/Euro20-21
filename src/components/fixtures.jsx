import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
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
  React.useEffect(() => {
    getFixtures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let previousDate;

  return (
    <div>
      {fixtures.map((match) => {
        const dayJune = 'th June';
        const cardHeader = (
          <Card.Header>
            {match.date}
            {dayJune}
          </Card.Header>
        );
        const bgColor = colorSwitch(match.date % 3);
        const dateHeader = previousDate !== match.date && cardHeader;
        previousDate = match.date;

        return (
          <Card key={match.id} bg={bgColor} text="dark" className="card__group">
            {dateHeader}
            <Card.Body>
              <Card.Title>
                {match.team1} ({match.score1}) vs ({match.score2}) {match.team2}
              </Card.Title>
              <Card.Text>
                {match.city} {match.time}
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
