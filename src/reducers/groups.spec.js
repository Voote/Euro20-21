import {
  GET_GROUPS,
  GET_GROUPS_ERROR,
  GET_GROUPS_SUCCESS
} from '../actions/actionTypes';
import { statusType } from '../constants';
import labels from '../assets/labels';
import groups from './groups';

describe('groups reducer', () => {
  it('should handle initial state', () => {
    expect(groups(undefined, {})).toEqual({
      data: [],
      status: ''
    });
  });

  it('should handle GET_GROUPS', () => {
    expect(
      groups([], {
        type: GET_GROUPS,
        payload: []
      })
    ).toEqual({
      data: [],
      status: statusType.loading
    });
  });

  it('should handle GET_GROUPS_ERROR', () => {
    expect(
      groups([], {
        type: GET_GROUPS_ERROR,
        payload: []
      })
    ).toEqual({
      data: [],
      status: statusType.error
    });
  });

  it('should handle GET_GROUPS_SUCCESS', () => {
    const result = [
      {
        id: 13,
        group: 'X',
        teams: [
          {
            id: 2,
            name: labels.Czech,
            matches: 7,
            round1: 3,
            goals1scored: 3,
            goals1lost: 2,
            round2: 1,
            goals2scored: 0,
            goals2lost: 0,
            round3: 0,
            goals3scored: 2,
            goals3lost: 7
          }
        ]
      }
    ];

    expect(
      groups([], {
        type: GET_GROUPS_SUCCESS,
        payload: result
      })
    ).toEqual({
      data: result,
      status: statusType.success
    });
  });
});
