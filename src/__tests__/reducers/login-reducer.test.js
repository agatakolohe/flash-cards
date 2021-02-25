import loginReducer from "../../reducers/login-reducer";
import * as c from "./../../actions/ActionTypes";

describe("loginReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(loginReducer(undefined, { type: null })).toEqual(false);
  });

  // test('Should toggle form login state to true', () => {
  //   expect(loginReducer(undefined, { type: c.TOGGLE_LOGIN })).toEqual(true);
  // });
});
