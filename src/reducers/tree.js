import {
  GET_TREE,
  GET_TREE_ERROR,
  GET_TREE_SUCCESS
} from '../actions/actionTypes';
import { statusType } from '../constants';

const initialState = {
  data: [],
  status: ''
};

const tree = (state = initialState, action) => {
  switch (action.type) {
    case GET_TREE: {
      return {
        ...state,
        data: [],
        status: statusType.loading
      };
    }
    case GET_TREE_ERROR: {
      return {
        ...state,
        data: [],
        status: statusType.error
      };
    }
    case GET_TREE_SUCCESS: {
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

export default tree;
