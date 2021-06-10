import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Col, Row } from 'react-bootstrap';
import { statusType } from '../constants';
import { getGroups } from '../actions/index';

const positions = [
  { id: 1, label: '1st' },
  { id: 2, label: '2nd' },
  { id: 3, label: '3rd' },
  { id: 4, label: '4th' }
];

const colorSwitch = (param) => {
  switch (param) {
    case 1:
      return 'warning';
    case 2:
      return 'dark';
    case 3:
      return 'light';
    default:
      return 'info';
  }
};

const Groups = ({ getGroups, groups }) => {
  React.useEffect(() => {
    getGroups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let previousGroup;
  let previousColor;
  let num;

  return (
    <div>
      <div>Group View</div>
      <div>
        {groups.map((team) => {
          let bgColor;

          previousGroup !== team.group
            ? (num = 0)
            : (num > 2 && (num = 0)) || (num = num + 1);

          const placeInGroup = positions[num].label;
          const cardGroup = <Card.Header>group {team.group}</Card.Header>;
          const isSameGroup = previousGroup !== team.group && cardGroup;
          const randomColor = colorSwitch(Math.floor(Math.random() * 4));
          const randomColorById = colorSwitch(
            Math.floor(Math.random() * team.id) % 4
          );

          (previousGroup === team.group && (bgColor = previousColor)) ||
            ((bgColor =
              (previousColor !== randomColorById && randomColorById) ||
              randomColor) &&
              (previousColor = bgColor));

          previousGroup = team.group;

          return (
            <Card
              key={team.id}
              bg={bgColor}
              text="dark"
              className="card__group"
            >
              {isSameGroup}
              <Card.Title>
                <Row>
                  <Col xs={3}>{placeInGroup}</Col>
                  <Col xs={6}>{team.name}</Col>
                  <Col xs={3}>{team.points}</Col>
                </Row>
              </Card.Title>
            </Card>
          );
        })}
      </div>
    </div>
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
