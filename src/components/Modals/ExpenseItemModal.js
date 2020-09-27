import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import PropTypes  from 'prop-types';
import {connect} from 'react-redux';
import {addExpenseItem} from '../../actions/expenseActions';

class ExpenseItemModal extends Component {

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
  this.toggle();}

  
  render() {
    return (
      <div>
        <Button
          color='dark'
          style={{ marginBottom: '2rem' , marginTop: '2rem' }}
          onClick={this.toggle}>
            Add Expense Item
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          >
          <ModalHeader toggle={this.toggle}>
            Add Expense Item
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={this.onSubmit}>

              <FormGroup>
                <Label for = "expense_item"></Label>
                  <Input
                    type='text' 
                    id= 'description'
                    name= 'description'
                    placeholder='Add Expense Item'
                    onChange={this.handleExpenseItemChange}>
                  </Input>

                  <Input
                    type='number'
                    id= 'amount'
                    name= 'amount'
                    placeholder='Amount in KES?'
                    style={{ marginTop: '2rem' }}
                    onChange={this.handleExpenseAmountChange}>
                  </Input>

                  <Button 
                    color='dark' 
                    style={{ marginTop: '2rem' }} 
                    block>
                      Add Expense
                  </Button>
              </FormGroup>
            </Form>

          </ModalBody>
        </Modal>
      </div>
    )
  }
}

ExpenseItemModal.propTypes = {
  addExpenseItem: PropTypes.func.isRequired,
  expense_item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  expense_item: state.expense_item
});

export default connect(mapStateToProps, {addExpenseItem})(ExpenseItemModal);

