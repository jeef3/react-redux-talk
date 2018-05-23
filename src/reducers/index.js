import { combineReducers } from 'redux';

import cards from './cards';
import listOrder from './listOrder';
import lists from './lists';
import loading from './loading';

export default combineReducers({
  cards,
  listOrder,
  lists,
  loading
});
