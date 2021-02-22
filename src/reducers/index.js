import formVisibleReducer from './form-visible-reducer';
import cardListReducer from './card-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterCardList: cardListReducer
});

export default rootReducer;