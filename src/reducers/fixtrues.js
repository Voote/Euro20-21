import {
  GET_FIXTURES,
  GET_FIXTURES_SUCCESS,
  GET_FIXTURES_ERROR
} from '../actions/actionTypes';
import { statusType } from './../constants';

const initialState = {
  data: 0,
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
    case GET_FIXTURES_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        status: statusType.success
      };
    }
    case GET_FIXTURES_ERROR: {
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

export default fixtures;
