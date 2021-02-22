import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
  const { id} = action;
  switch (action.type) {
  // case c.ADD_CARD:
  //   return Object.assign({}, state, {
  //     [id]: {
  //       term: term,
  //       definition: definition,
  //       id: id
  //     }
  //   });
  case c.DELETE_CARD:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};