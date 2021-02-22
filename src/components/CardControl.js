import React from 'react';
import NewCardForm from './NewCardForm';
import CardList from './CardList';
import CardDetail from './CardDetail';
import EditCardForm from './EditCardForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from '../actions';

class CardControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCard: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedCard != null) {
      this.setState({
        selectedCard: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewCardToList = (newCard) => {
    const { dispatch } = this.props;
    const action = a.addCard(newCard)
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedCard = (id) => {
    const selectedCard = this.props.masterCardList[id];
    this.setState({selectedCard: selectedCard});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingCardInList = (cardToEdit) => {
    const { dispatch } = this.props;
    const action = a.addCard(cardToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedCard: null
    });
  }

  handleDeletingCard = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteCard(id);
    dispatch(action);
    this.setState({selectedCard: null});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {
      currentlyVisibleState = <EditCardForm card = {this.state.selectedCard} onEditCard = {this.handleEditingCardInList} />
      buttonText = "Return to Card List";
    } else if (this.state.selectedCard != null) {
      currentlyVisibleState =
      <CardDetail
        card = {this.state.selectedCard}
        onClickingDelete = {this.handleDeletingCard}
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Card List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewCardForm onNewCardCreation={this.handleAddingNewCardToList}  />;
      buttonText = "Return to Card List";
    } else {
      currentlyVisibleState = <CardList cardList={this.props.masterCardList} onCardSelection={this.handleChangingSelectedCard} />;
      buttonText = "Add Card";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

CardControl.propTypes = {
  masterCardList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterCardList: state.masterCardList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

CardControl = connect(mapStateToProps)(CardControl);

export default CardControl;