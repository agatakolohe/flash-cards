import React from "react";
// import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from "react-redux-firebase";

function NewCardForm(props){
  const firestore = useFirestore();

  function addCardToFirestore(event) {
    event.preventDefault();
    props.onNewCardCreation();

    return firestore.collection("cards").add({
      term: event.target.term.value,
      definition: event.target.definition.value
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={addCardToFirestore}
        buttonText="Create Card" />
    </React.Fragment>
  );
}

NewCardForm.propTypes = {
  onNewCardCreation: PropTypes.func
};

export default NewCardForm;