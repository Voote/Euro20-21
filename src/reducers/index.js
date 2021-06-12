import { combineReducers } from 'redux';

import fixtures from './fixtrues';
import groups from './groups';
import teams from './teams';

const rootReducer = combineReducers({
  fixtures,
  groups,
  teams
});

export default rootReducer;
