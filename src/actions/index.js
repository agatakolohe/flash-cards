import * as c from './ActionTypes';

export const deleteCard = id => ({
  type: c.DELETE_CARD,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addCard = (card) => {
  const { term, definition, id, } = card;
  return {
    type: c.ADD_CARD,
    term: term,
    definition: definition,
    id: id
  }
}
