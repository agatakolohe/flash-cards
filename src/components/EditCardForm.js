import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCardForm (props) {
  const { card } = props;

  function handleEditCardFormSubmission(event) {
    event.preventDefault();
    props.onEditCard({
      term: event.target.term.value,
      definition: event.target.definition.value,
      id: card.id});
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