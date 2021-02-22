import React from "react";
import PropTypes from "prop-types";

function CardDetail(props){
  const { card, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>{card.term}</h1>
      <h3>{card.definition}</h3>
      <button onClick={ props.onClickingEdit }>Update Card</button>
      <button onClick={()=> onClickingDelete(card.id) }>Delete Card</button>
      <hr/>
    </React.Fragment>
  );
}

CardDetail.propTypes = {
  card: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CardDetail;