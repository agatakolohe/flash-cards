import React from "react";
import PropTypes from "prop-types";

function Card(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCardClicked(props.id)}>
        <h1>{props.term}</h1>
        <h3>{props.definition}</h3>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Card.propTypes = {
  term: PropTypes.string,
  definition: PropTypes.string,
  id: PropTypes.string,
  whenCardClicked: PropTypes.func
};

export default Card;