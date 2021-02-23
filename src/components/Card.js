import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenCardClicked(props.id)}>
        <h1>{props.term}</h1>
        <h3>{props.definition}</h3>
      </div>
      <hr />
    </React.Fragment>
  );
}
// add userId to card that will match the user's unique Id
// upon card creation, we can obtain the current user's Id, set the cards Id equal to that.

Card.propTypes = {
  term: PropTypes.string,
  definition: PropTypes.string,
  id: PropTypes.string,
  userId: PropTypes.string,
  whenCardClicked: PropTypes.func,
};

export default Card;
