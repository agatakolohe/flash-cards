import cardListReducer from '../../reducers/card-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('cardListReducer', () => {

  let action;

  const currentState = {
    1: {term: 'CAP Theorem',
    definition: 'Consistency, Availability, Partition Tolerance. A Key concept that governs why and how NoSQL databases are scalable and good for big data',
    id: 1 },
    2: {term: 'Consistency in CAP',
    definition: 'All users have access to the same data in the system at the same time',
    id: 2 }
  }

  const cardData = {
    1: {term: 'CAP Theorem',
    definition: 'Consistency, Availability, Partition Tolerance. A Key concept that governs why and how NoSQL databases are scalable and good for big data',
    id: 1}
  };

  test('Should return default state if no action type is recognized', () => {
    expect(cardListReducer({}, { type: null })).toEqual({});
  });

  // test('Should successfully add new card data to masterCardList', () => {
  //   const { term, definition, id } = cardData;
  //   action = {
  //     type: c.ADD_CARD,
  //     term: term,
  //     definition: definition,
  //     id: id
  //   };
  //   expect(cardListReducer({}, action)).toEqual({
  //     [id] : {
  //       term: term,
  //       definition: definition,
  //       id: id
  //     }
  //   });
  // });

  test('Should successfully delete a card', () => {
    action = {
      type: c.DELETE_CARD,
      id: 1
    };
    expect(cardListReducer(currentState, action)).toEqual({
      2: {term: 'Consistency in CAP',
      definition: 'All users have access to the same data in the system at the same time',
        id: 2 }
    });
  });

});