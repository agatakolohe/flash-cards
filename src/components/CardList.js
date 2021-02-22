import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

function CardList(props){
  return (
    <>

      {Object.values(props.cardList).map((card) => {
        return <Card
          whenCardClicked = { props.onCardSelection }
          term={card.term}
          id={card.id}
          key={card.id}/>
      })}
    </>
  );
}

CardList.propTypes = {
  cardList: PropTypes.object,
  onCardSelection: PropTypes.func
};

export default CardList;