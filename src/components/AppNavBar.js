import React, { Component } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText,Container} from 'reactstrap';
import RegisterModal from './Modals/RegisterModal';
import LoginModal from './Modals/LoginModal';
import FAQsModal from './Modals/FAQsModal';

export class AppNavBar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    render() {
        return (
            <Container>
                <Navbar color="dark" dark expand="sm" className="mb-2">
                    <Container>
                        <NavbarBrand>Budger APP</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="#">
                                        <RegisterModal />
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink>
                                        <LoginModal />
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink>
                                        <FAQsModal />
                                    </NavLink>
                                </NavItem>

                            

                               
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar> 
            </Container>
        )
    }
}

export default AppNavBar

