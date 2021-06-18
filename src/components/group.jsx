import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Col, Container, Row } from 'react-bootstrap';
import { statusType } from '../constants';
import { getFixtures, getGroups } from '../actions/index';
import colorSwitch from './colorSwitch';

const positions = [
  { id: 1, label: '1st' },
  { id: 2, label: '2nd' },
  { id: 3, label: '3rd' },
  { id: 4, label: '4th' }
];

const Groups = ({ getFixtures, fixtures, getGroups, groups }) => {
  useEffect(() => {
    getFixtures();
    getGroups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(fixtures);
  const headerText = 'Group View';
  const groupHeader = 'GROUP ';
  let num = 0;
  let colorCounter = 0;
  let colorCounter2 = 2;

  return (
    <Container fluid>
      <div>{headerText}</div>
      <Row className="frame">
        {groups.map((team) => {
          const groupName = team.group;

          let groupMatches = fixtures
            .filter((elements) =>
              elements.matches.some((match) => match.group === groupName)
            )
            .map((element) => {
              let newEle = Object.assign({}, element);
              return newEle.matches.filter(
                (match) => match.group === groupName
              );
            });

          console.log(groupMatches);
          const bgColor = colorSwitch[colorCounter];
          const bgColor2 = colorSwitch[colorCounter2];
          // console.log('color1: ', colorCounter, 'color2: ', colorCounter2);
          colorCounter++;
          colorCounter2++;
          colorCounter >= colorSwitch.length && (colorCounter = 0);
          colorCounter2 >= colorSwitch.length && (colorCounter2 = 0);

          const points = (item) => item.round1 + item.round2 + item.round3;
          const sortedArray = team.teams.sort((a, b) => points(b) - points(a));
          const utc = ' (UTC)';

          return (
            <Col xs={12} md={6} xl={4} key={team.id}>
              <Card bg={bgColor} text="dark" className="card__group">
                <Card.Header>
                  <h4>
                    <span className="labels__header">{groupHeader}</span>
                    <strong>{team.group}</strong>
                  </h4>
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    {sortedArray.map((item) => {
                      const placeInGroup = positions[num].label;
                      num > 2 ? (num = 0) : (num += 1);

                      return (
                        <Row key={item.id}>
                          <Col xs={2}>{placeInGroup}</Col>
                          <Col xs={7}>{item.name}</Col>
                          <Col xs={1}>{item.matches}</Col>
                          <Col xs={1}>{points(item)}</Col>
                        </Row>
                      );
                    })}
                  </Card.Title>
                  <div className="card__border card__border--group" />
                </Card.Body>
              </Card>
              {/* <div>
                {groupMatches.map((array) => (
                  <Card
                    key={array.id}
                    bg={bgColor}
                    text="dark"
                    className="card__match card__teams"
                  >
                    <Card.Body>
                      <Card.Title>
                        {array.matches.map((match) => (
                          <div key={match.id}>
                            <Row>
                              <Col className="card__match--left" xs={5}>
                                {match.team1}
                              </Col>
                              <Col xs={2}>
                                {match.score1}:{match.score2}
                              </Col>
                              <Col className="card__match--right" xs={5}>
                                {match.team2}
                              </Col>
                            </Row>
                            <Card.Text className="labels__header card__teams--gap">
                              <span>{match.city} </span>
                              {match.time} {utc}
                            </Card.Text>
                          </div>
                        ))}
                      </Card.Title>
                      <div className="card__border" />
                    </Card.Body>
                  </Card>
                ))}
              </div> */}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  fixtures: state.fixtures.data,
  groups: state.groups.data,
  isFixturesLoading: state.fixtures.status === statusType.loading,
  isGroupsLoading: state.groups.status === statusType.loading
});

const mapDispatchToProps = (dispatch) => ({
  getFixtures: () => dispatch(getFixtures()),
  getGroups: () => dispatch(getGroups())
});

Groups.defaultProps = {
  fixtures: [],
  groups: [],
  isFixturesLoading: false,
  isGroupsLoading: false
};

Groups.propTypes = {
  fixtures: PropTypes.array,
  groups: PropTypes.array,
  isFixturesLoading: PropTypes.bool,
  isGroupsLoading: PropTypes.bool,
  getFixtures: PropTypes.func.isRequired,
  getGroups: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
