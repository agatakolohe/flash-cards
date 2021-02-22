import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function CardList(props){
  useFirestoreConnect([
    { collection: 'cards' }
  ]);

  const cards = useSelector(state => state.firestore.ordered.cards);

  if (isLoaded(cards)){
    return (
      <>
        {cards.map((card) => {
          return <Card
            whenCardClicked = { props.onCardSelection }
            term={card.term}
            id={card.id}
            key={card.id}/>
        })}
      </>
    );
  } else {
    return (
      <>
        <h3>Loading...</h3>
      </>
    )
  }
}

CardList.propTypes = {
  // cardList: PropTypes.object,
  onCardSelection: PropTypes.func
};

export default CardList;