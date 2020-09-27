import React, { Component } from 'react';
import {
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ModalFooter
} from 'reactstrap';


class RegisterModal extends Component {

  state = {
    modal: false,
    description: '',
    amount: ''
  }

  toggle = () => {
    this.setState ({
      modal: !this.state.modal
    });
  };


    handleExpenseItemChange = (e) => {
      this.setState({
        description : e.target.value
    })};

    handleExpenseAmountChange = (e) => {
      this.setState({
        amount : e.target.value
      })}

   onSubmit = e => {
    e.preventDefault();
    const expense_item = {
      description: this.state.description,
      amount: this.state.amount
    };
    this.props.addExpenseItem(expense_item);
    this.toggle();
  }

  
  render() {
    return (
      <div>
        <NavLink onClick={this.toggle}  href="#">
            About/FAQs
        </NavLink>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          >
          <ModalHeader toggle={this.toggle}>
            About this Budger APP
          </ModalHeader>

          <ModalBody>

            <p>Budger APP is a simple web application that provides spending insights, 
              tracks you expenses and income sources and provides a simple dashboard to 
              highlight expenses and income sources.
            </p>

            <p>
            The first step to start saving money is to figure out how much you spend. 
            Keep track of all your expenses—that means every coffee, household item and cash tip.
            </p>

            <p>
            If your expenses are so high that you can’t save as much as you’d like, 
            it might be time to cut back. Identify nonessentials that you can spend less 
            on, such as entertainment and dining out. Look for ways to save on your fixed 
            monthly expenses like television and your cell phone, too.
            </p>


          </ModalBody>
          <ModalFooter>
          <Button color="success" onClick={this.toggle}>I Agree</Button>{' '}
          <Button color="dark" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
        </Modal>
      </div>
    )
  }
}



export default RegisterModal;

