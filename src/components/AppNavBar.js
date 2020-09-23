import React, { Component } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText,Container} from 'reactstrap';

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
                        <NavbarBrand> Budger APP - <i>Spend, Track and <span style={{ backgroundColor: 'success' }}>Solidify</span></i></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="#">
                                        Register
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="#">
                                        Login
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="#">
                                        FAQs
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

