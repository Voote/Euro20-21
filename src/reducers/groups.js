import {
  GET_GROUPS,
  GET_GROUPS_ERROR,
  GET_GROUPS_SUCCESS
} from './../actions/actionTypes';
import { statusType } from './../constants';

const initialState = {
  data: [],
  status: ''
};

const groups = (state = initialState, action) => {
  switch (action.type) {
    case GET_GROUPS: {
      return {
        ...state,
        data: [],
        status: statusType.loading
      };
    }
    case GET_GROUPS_ERROR: {
      return {
        ...state,
        data: [],
        status: statusType.error
      };
    }
    case GET_GROUPS_SUCCESS: {
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

export default groups;
