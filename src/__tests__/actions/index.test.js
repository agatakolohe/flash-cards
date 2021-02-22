import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('help queue actions', () => {
  it('addCard should create ADD_CARD action', () => {
    expect(actions.addCard({term: 'Serialization', definition: 'Converts an instance of a class into a stream of bytes so it can then be transported/transmitted to memory, a database, or a file.', id: 1})).toEqual({
      type: c.ADD_CARD,
      term: 'Serialization',
      definition: 'Converts an instance of a class into a stream of bytes so it can then be transported/transmitted to memory, a database, or a file.',
      id: 1
    });
  });

  it('deleteCard should create DELETE_CARD action', () => {
    expect(actions.deleteCard(1)).toEqual({
      type: c.DELETE_CARD,
      id: 1
    });
  });

  it('toggleFrom should create TOGGLE_CARD action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

});