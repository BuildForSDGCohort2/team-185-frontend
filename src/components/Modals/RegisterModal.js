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


class RegisterModal extends Component {

  state = {
    modal: false,
    name: '',
    email: '',
    password: ''
  }

    toggle = () => {
      this.setState ({
        modal: !this.state.modal
      });
    };


    handleUserName = (e) => {
      this.setState({
        name : e.target.value
    })};

    handleUserEmail = (e) => {
      this.setState({
        email : e.target.value
    })}

      
    handleUserPassword = (e) => {
      this.setState({
        password : e.target.value
    })}

  //  onSubmit = e => {
  //   e.preventDefault();
  //   const user = {
  //     name: this.state.name,
  //     email: this.state.email,
  //   };
  //   this.props.addNewUser(user);
  //   this.toggle();
  // }

  
  render() {
    return (
      <div>
        <NavLink onClick={this.toggle} href="#">
            Register
        </NavLink>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          >
          <ModalHeader toggle={this.toggle}>
            New User? Register
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={this.onSubmit}>

              <FormGroup>

                  <Label for = "name">Name</Label>
                  <Input
                    type='text' 
                    id= 'name'
                    name= 'name'
                    placeholder='Enter Name :'
                    onChange={this.handleUserName}>
                  </Input>

                  <Label for = "name" style={{ marginTop: '1rem' }}>Email</Label>
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
                      Sign up.
                  </Button>

              </FormGroup>
            </Form>

          </ModalBody>
        </Modal>
      </div>
    )
  }
}



export default RegisterModal;
