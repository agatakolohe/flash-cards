import formVisibleReducer from "./form-visible-reducer";
import cardListReducer from "./card-list-reducer";
import loginReducer from "./login-reducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterCardList: cardListReducer,
  firestore: firestoreReducer,
  login: loginReducer,
});

export default rootReducer;
