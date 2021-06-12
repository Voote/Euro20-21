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
  useEffect(() => {
    getGroups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let num = 0;
  let colorCounter = 0;

  return (
    <div>
      <div>Group View</div>
      <div>
        {groups.map((team) => {
          const bgColor = colorSwitch(colorCounter);
          colorCounter = colorCounter +1;
          if (colorCounter >= 4) colorCounter = 0;

          const sortedArray = team.teams.sort((a, b) => (b.round1+b.round2+b.round3) - (a.round1+a.round2+a.round3));

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
                    const pointsSum = item.round1+item.round2+item.round3;
                    const placeInGroup = positions[num].label;
                    num > 2 ? (num = 0) : (num += 1);

                    return (
                      <Row key={item.id}>
                        <Col xs={2}>{placeInGroup}</Col>
                        <Col xs={8}>{item.name}</Col>
                        <Col xs={2}>{pointsSum}</Col>
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
