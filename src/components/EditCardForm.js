import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditCardForm (props) {
  const firestore = useFirestore();
  const { card } = props;

  function handleEditCardFormSubmission(event) {
    event.preventDefault();
    props.onEditCard();
    const propertiesToUpdate = {
      term: event.target.term.value,
      definition: event.target.definition.value
    }
    return firestore.update({collection: 'cards', doc: card.id}, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditCardFormSubmission}
        buttonText="Update Card" />
    </React.Fragment>
  );
}

EditCardForm.propTypes = {
  onEditCard: PropTypes.func
};

export default EditCardForm;