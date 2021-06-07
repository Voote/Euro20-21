import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import { statusType } from '../constants';
import { getFixtures, getTeams } from '../actions';

const bazaTestowa = [
  {
    id: 0,
    name: 'item1'
  },
  {
    id: 1,
    name: 'item2'
  },
  {
    id: 2,
    name: 'item3'
  },
  {
    id: 3,
    name: 'item4'
  }
];

const Group = ({
  getFixtures,
  getTeams,
  fixtures,
  teams,
  isFixturesLoading,
  isTeamsLoading
}) => {
  React.useEffect(() => {
    getFixtures();
    getTeams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   const row2 = teams
  //     .reduce(function (accumulator, currentValue, currentIndex, array) {
  //       if (currentIndex % 2 === 0)
  //         accumulator.push(array.slice(currentIndex, currentIndex + 2));
  //       return accumulator;
  //     }, [])
  //     .map((p) => console.log(p[0], p[1]));

  return (
    <div>
      <div>
        {fixtures.map((druzyna) => (
          <div key={druzyna.id}>
            <Card bg="warning" text="dark" className="card__group">
              <Card.Header>
                {druzyna.team1} vs {druzyna.team2}
              </Card.Header>
              <Card.Body>
                <Card.Title>{druzyna.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
        {/*     
        <div>
          <Card bg="info" text="dark" className="card__group">
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card bg="light" text="dark" className="card__group">
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card bg="dark" text="dark" className="card__group">
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  fixtures: state.fixtures.data,
  teams: state.teams.data,
  isFixturesLoading: state.fixtures.status === statusType.loading,
  isTeamsLoading: state.teams.status === statusType.loading
});

const mapDispatchToProps = (dispatch) => ({
  getFixtures: () => dispatch(getFixtures()),
  getTeams: () => dispatch(getTeams())
});

Group.defaultProps = {
  fixtures: [],
  teams: [],
  isFixturesLoading: false,
  isTeamsLoading: false
};

Group.propTypes = {
  fixtures: PropTypes.array,
  teams: PropTypes.array,
  isFixturesLoading: PropTypes.bool,
  isTeamsLoading: PropTypes.bool,
  getFixtures: PropTypes.func.isRequired,
  getTeams: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);
