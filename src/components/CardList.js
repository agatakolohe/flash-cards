import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

function CardList(props) {
  useFirestoreConnect([{ collection: "cards" }]);

  const cards = useSelector((state) => state.firestore.ordered.cards);
  const user = firebase.auth().currentUser;
  // const user = firebase.auth.EmailAuthProvider.PROVIDER_ID;

  const history = useHistory();
  function navigateToHome() {
    history.push("/signin");
  }

  if (user === null) {
    return (
      <>
        <h1>You must log in to view flash cards</h1>
        <button onClick={navigateToHome}>Click To Go Home</button>
      </>
    );
  } else if (isLoaded(cards) && user.uid != null) {
    return (
      <>
        {cards.map((card) => {
          if (card.userId === user.uid) {
            return (
              <Card
                whenCardClicked={props.onCardSelection}
                term={card.term}
                id={card.id}
                key={card.id}
              />
            );
          }
        })}
      </>
    );
  } else {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }
}

CardList.propTypes = {
  // cardList: PropTypes.object,
  onCardSelection: PropTypes.func,
};

export default CardList;

// var user = firebase.auth().currentUser;

// if (user) {
//   // User is signed in.
// } else {
//   // No user is signed in.
// }
