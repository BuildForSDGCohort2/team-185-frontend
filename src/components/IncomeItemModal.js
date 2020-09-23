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
} from 'reactstrap'
import PropTypes  from 'prop-types';
import {connect} from 'react-redux';
import {addIncomeItem} from '../actions/incomeActions';


class IncomeItemModal extends Component {

  state = {
    modal: false,
    description: '',
    amount: ''
  }

  toggle = () => {
    this.setState ({
      modal: !this.state.modal
    });
  }
  
  handleIncomeItemAdd = (e) => {
    this.setState({
      description : e.target.value
  })};

  handleIncomeAmountAdd = (e) => {
      this.setState({
        amount : e.target.value
  })};

  onSubmit = e => {
    e.preventDefault();
    const income_item = {
      description: this.state.description,
      amount: this.state.amount
    };
    this.props.addIncomeItem(income_item);
    this.toggle();
  }


  render() {
    return (
      <div>
        <Button
          color='success'
          style={{ marginBottom: '2rem', marginTop: '2rem'}}
          onClick={this.toggle} >
            Add Income Item
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          >
          <ModalHeader toggle={this.toggle}>
            Add Income Item
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={this.onSubmit}>

            <FormGroup>
                <Label for = "expense_item"></Label>
                  <Input
                    type='text' 
                    id= 'description'
                    name= 'description'
                    placeholder='Add Income Item'
                    onChange={this.handleIncomeItemAdd}>
                  </Input>

                  <Input
                    type='number'
                    id= 'amount'
                    name= 'amount'
                    placeholder='Amount in KES?'
                    style={{ marginTop: '2rem' }}
                    onChange={this.handleIncomeAmountAdd}>
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

IncomeItemModal.propTypes = {
  addIncomeItem: PropTypes.func.isRequired,
  income_item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  income_item: state.income_item
});

export default connect(mapStateToProps, {addIncomeItem})(IncomeItemModal);

