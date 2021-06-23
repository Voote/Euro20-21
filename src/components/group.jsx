import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Col, Container, Row } from 'react-bootstrap';
import { statusType } from '../constants';
import { getFixtures, getGroups } from '../actions/index';
import Match from './match';
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

          const points = (item) => item.round1 + item.round2 + item.round3;
          const goals = (item) =>
            item.goals1scored +
            item.goals2scored +
            item.goals3scored -
            item.goals1lost -
            item.goals2lost -
            item.goals3lost;
          const sortedArray = team.teams.sort(
            (a, b) =>
              (points(b) !== points(a) && points(b) - points(a)) ||
              goals(b) - goals(a)
          );
          const bgColor = colorSwitch[colorCounter];
          const bgColor2 = colorSwitch[colorCounter2];
          colorCounter++;
          colorCounter2++;
          colorCounter >= colorSwitch.length && (colorCounter = 0);
          colorCounter2 >= colorSwitch.length && (colorCounter2 = 0);

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

              <Card bg={bgColor2} text="dark" className="card__group">
                <Card.Body>
                  <Card.Title>
                    {groupMatches.flat().map((match) => (
                      <Match key={match.id} match={match} />
                    ))}
                  </Card.Title>
                  <div className="card__border card__border--group" />
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
