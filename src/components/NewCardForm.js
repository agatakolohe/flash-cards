import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewCardForm(props){

  function handleNewCardFormSubmission(event) {
    event.preventDefault();
    props.onNewCardCreation({
      term: event.target.term.value,
      definition: event.target.definition.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewCardFormSubmission}
        buttonText="Create Card" />
    </React.Fragment>
  );
}

NewCardForm.propTypes = {
  onNewCardCreation: PropTypes.func
};

export default NewCardForm;