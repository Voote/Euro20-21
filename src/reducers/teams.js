import {
  GET_TEAMS,
  GET_TEAMS_SUCCESS,
  GET_TEAMS_ERROR
} from '../actions/actionTypes';
import { statusType } from '../constants';

const initialState = {
  data: 0,
  status: ''
};

const teams = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAMS: {
      return {
        ...state,
        data: [],
        status: statusType.loading
      };
    }
    case GET_TEAMS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        status: statusType.success
      };
    }
    case GET_TEAMS_ERROR: {
      return {
        ...state,
        data: [],
        status: statusType.error
      };
    }
    default:
      return state;
  }
};

export default teams;
