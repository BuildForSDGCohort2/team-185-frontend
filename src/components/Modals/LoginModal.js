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
  Button
} from 'reactstrap';


class LoginModal extends Component {

    state = {
      modal: false,
      name: '',
      email: '',
      password: ''
    }


    toggle = () => {
      this.setState ({
        modal: !this.state.modal
    })};

    handleUserEmail = (e) => {
      this.setState({
        email : e.target.value
    })};

    handleUserPassword = (e) => {
        this.setState({
          password : e.target.value
    })};

    // onSubmit = e => {
    //   e.preventDefault();
    //   const expense_item = {
    //     description: this.state.description,
    //     amount: this.state.amount
    //   };
    //   this.props.addExpenseItem(expense_item);
    //   this.toggle();
    // }

  
  render() {
    return (
      <div>
        <NavLink onClick={this.toggle} href="#">
            Login
        </NavLink>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          >
          <ModalHeader toggle={this.toggle}>
            Login...
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={this.onSubmit}>

              <FormGroup>

                  <Label for = "email">Email</Label>
                  <Input
                    type='email' 
                    id= 'email'
                    name= 'email'
                    placeholder='Enter Email :'
                    onChange={this.handleUserEmail}>
                  </Input>

                  <Label for = "name" style={{ marginTop: '1rem' }}>Password</Label>
                  <Input
                    type='password' 
                    id= 'password'
                    name= 'password'
                    placeholder='Enter Password :'
                    onChange={this.handleUserPassword}>
                  </Input>

                  <Button 
                    color='dark' 
                    style={{ marginTop: '1rem' }} 
                    block>
                      Login
                  </Button>
              </FormGroup>
            </Form>

          </ModalBody>
        </Modal>
      </div>
    )
  }
}



export default LoginModal;

