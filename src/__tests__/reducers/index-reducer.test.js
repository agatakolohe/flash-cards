import rootReducer from "../../reducers/index";
import formVisibleReducer from "../../reducers/form-visible-reducer";
import cardListReducer from "../../reducers/card-list-reducer";
import { createStore } from "redux";
import * as c from "./../../actions/ActionTypes";

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toMatchObject({
      masterCardList: {},
      formVisibleOnPage: false,
      firestore: {},
    });
  });

  test("Check that initial state of cardListReducer matches root reducer", () => {
    expect(store.getState().masterCardList).toEqual(
      cardListReducer(undefined, { type: null })
    );
  });

  test("Check that initial state of formVisibleReducer matches root reducer", () => {
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(undefined, { type: null })
    );
  });

  // test('Check that initial state of cardListReducer matches root reducer', () => {
  //   const action = {
  //     type: c.ADD_CARD,
  //     term: 'Serialization',
  //     definition: 'Converts an instance of a class into a stream of bytes so it can then be transported/transmitted to memory, a database, or a file.',
  //     id: 1
  //   }
  //   store.dispatch(action);
  //   expect(store.getState().masterCardList).toEqual(cardListReducer(undefined, action));
  // });

  test("Check that initial state of formVisibleReducer matches root reducer", () => {
    const action = {
      type: c.TOGGLE_FORM,
    };
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(undefined, action)
    );
  });
});
