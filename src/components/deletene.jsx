import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Col, Row } from 'react-bootstrap';
import { statusType } from '../constants';
import { getGroups } from '../actions/index';

const positions = [
  { id: 0, position: '1st' },
  { id: 1, position: '2nd' },
  { id: 2, position: '3rd' },
  { id: 3, position: '4th' }
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
  let previousGroup;
  let previousColor;
  React.useEffect(() => {
    getGroups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>Group View</div>
      <div>
        {groups.map((team) => {
          let bgColor;
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
                  <Col xs={3}>1st</Col>
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
