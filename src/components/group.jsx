import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Col, Row } from 'react-bootstrap';
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
  // const getGroupArrayMemo = useMemo(() => {
  //   getGroups();
  // }, [getGroups]);
  // useEffect(() => getGroupArrayMemo, [getGroupArrayMemo]);

  useEffect(() => {
    getGroups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let previousGroup;
  let previousColor;
  let num = 0;

  return (
    <div>
      <div>Group View</div>
      <div>
        {groups.map((team) => {
          let bgColor;

          const sortedArray = team.teams.sort((a, b) => b.points - a.points);
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
              <Card.Header>
                <h4>
                  <span className="card__group--header">GROUP </span>
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
                        <Col xs={8}>{item.name}</Col>
                        <Col xs={2}>{item.points}</Col>
                      </Row>
                    );
                  })}
                </Card.Title>
                <div className="card__border card__border--group" />
              </Card.Body>
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
