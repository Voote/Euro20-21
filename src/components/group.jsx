import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Col, Row } from 'react-bootstrap';
import { statusType } from '../constants';
import { getGroups } from '../actions/index';

const colorSwitch = (param) => {
  switch (param) {
    case 1:
      return 'dark';
    case 2:
      return 'info';
    case 3:
      return 'light';
    default:
      return 'warning';
  }
};

const Groups = ({ getGroups, groups }) => {
  React.useEffect(() => {
    getGroups();
  }, []);
  let previousGroup;
  let previousColor;

  return (
    <div>
      <div>hello world</div>
      <div>
        {groups.map((team) => {
          let bgColor;
          const cardGroup = <Card.Header>group {team.group}</Card.Header>;
          const randomColor = colorSwitch(Math.floor(Math.random() * 4));
          (previousGroup === team.group && (bgColor = previousColor)) ||
            ((bgColor =
              (randomColor !== previousColor && randomColor) ||
              colorSwitch(team.id % 4)) &&
              (previousColor = bgColor));

          const isSameGroup = previousGroup !== team.group && cardGroup;
          previousGroup = team.group;

          console.log('previous: ', previousColor, 'bgColor ', bgColor);

          return (
            <Card key={team.id} bg={bgColor} text="dark">
              {isSameGroup}
              <Card.Title>{team.name}</Card.Title>
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
