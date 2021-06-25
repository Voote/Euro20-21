import { combineReducers } from 'redux';

import fixtures from './fixtrues';
import groups from './groups';
import teams from './teams';
import tree from './tree';

const rootReducer = combineReducers({
  fixtures,
  groups,
  teams,
  tree
});

export default rootReducer;
