import {
  GET_TEAMS,
  GET_TEAMS_ERROR,
  GET_TEAMS_SUCCESS
} from '../actions/actionTypes';
import { statusType } from '../constants';

const initialState = {
  data: [],
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
    case GET_TEAMS_ERROR: {
      return {
        ...state,
        data: [],
        status: statusType.error
      };
    }
    case GET_TEAMS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        status: statusType.success
      };
    }
    default:
      return state;
  }
};

export default teams;
