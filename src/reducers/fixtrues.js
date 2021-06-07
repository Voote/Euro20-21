import {
  GET_FIXTURES,
  GET_FIXTURES_ERROR,
  GET_FIXTURES_SUCCESS
} from '../actions/actionTypes';
import { statusType } from '../constants';

const initialState = {
  data: [],
  status: ''
};

const fixtures = (state = initialState, action) => {
  switch (action.type) {
    case GET_FIXTURES: {
      return {
        ...state,
        data: [],
        status: statusType.loading
      };
    }
    case GET_FIXTURES_ERROR: {
      return {
        ...state,
        data: [],
        status: statusType.error
      };
    }
    case GET_FIXTURES_SUCCESS: {
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

export default fixtures;
