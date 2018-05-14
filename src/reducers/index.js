import { combineReducers } from 'redux';

import listOrder from './listOrder';
import lists from './lists';
import cards from './cards';

export default combineReducers({
  listOrder,
  lists,
  cards
});
