import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Col, Container, Row } from 'react-bootstrap';
import { statusType } from '../constants';
import { getGroups } from '../actions/index';
import colorSwitch from './colorSwitch';

const positions = [
  { id: 1, label: '1st' },
  { id: 2, label: '2nd' },
  { id: 3, label: '3rd' },
  { id: 4, label: '4th' }
];

const Groups = ({ getGroups, groups }) => {
  useEffect(() => {
    getGroups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const headerText = 'Group View';
  const groupHeader = 'GROUP ';
  let num = 0;
  let colorCounter = 0;

  return (
    <Container fluid>
      <div>{headerText}</div>
      <Row className="frame">
        {groups.map((team) => {
          const bgColor = colorSwitch[colorCounter];
          colorCounter++;
          colorCounter >= colorSwitch.length && (colorCounter = 0);

          const points = (item) => item.round1 + item.round2 + item.round3;
          const sortedArray = team.teams.sort((a, b) => points(b) - points(a));

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
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  groups: state.groups.data,
  isGroupsLoading: state.groups.status === statusType.loading
});

const mapDispatchToProps = (dispatch) => ({
  getGroups: () => dispatch(getGroups())
});

Groups.defaultProps = {
  groups: [],
  isGroupsLoading: false
};

Groups.propTypes = {
  groups: PropTypes.array,
  isGroupsLoading: PropTypes.bool,
  getGroups: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
