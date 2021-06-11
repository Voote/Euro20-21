import { combineReducers } from 'redux';

import fixtures from './fixtrues';
import teams from './teams';

const rootReducer = combineReducers({
  fixtures,
  teams
});

export default rootReducer;
