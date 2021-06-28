import {
  GET_FIXTURES,
  GET_FIXTURES_ERROR,
  GET_FIXTURES_SUCCESS
} from '../actions/actionTypes';
import labels from '../assets/labels';
import { statusType } from '../constants';
import fixtures from './fixtrues';

describe('fixtures reducer', () => {
  it('should handle initial state', () => {
    expect(fixtures(undefined, {})).toEqual({
      data: [],
      status: ''
    });
  });

  it('should handle GET_FIXTURES', () => {
    expect(
      fixtures([], {
        type: GET_FIXTURES,
        payload: []
      })
    ).toEqual({
      data: [],
      status: statusType.loading
    });
  });

  it('should handle GET_FIXTURES_ERROR', () => {
    expect(
      fixtures([], {
        type: GET_FIXTURES_ERROR,
        payload: []
      })
    ).toEqual({
      data: [],
      status: statusType.error
    });
  });
  it('should handle GET_FIXTURES_SUCCESS', () => {
    const result = [
      {
        id: 7,
        date: 77,
        day: labels.Monday,
        matches: [
          {
            id: 17,
            group: 'Z',
            time: labels.time15,
            team1: labels.Belgium,
            score1: 7,
            team2: labels.Ukraine,
            score2: 2,
            city: labels.Amsterdam
          }
        ]
      }
    ];

    expect(
      fixtures([], {
        type: GET_FIXTURES_SUCCESS,
        payload: result
      })
    ).toEqual({
      data: result,
      status: statusType.success
    });
  });
});
