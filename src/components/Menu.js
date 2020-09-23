import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button, Modal, Row, Col, Badge} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {v1 as uuid} from "uuid"; 



export default class Menu extends Component {
    render() {
        return (
            <Container style={{ marginLeft: '11rem' }}>
                <Button color="secondary" size="lg" style={{ marginBottom: '1rem', marginRight: '4rem'}}
                    onClick = {() => {const name = prompt('Enter Item');
                        if (name) {
                            this.setState(state => ({
                                expense_items: [...state.expense_items, {id: uuid(), name}]
                            }));
                        }
                    }}
                    >
                    Add Expense Item
                </Button>

                <Button color="success" size="lg" style={{ marginBottom: '1rem' }}>
                    Add Income Item
                </Button>
                
                <span >
                    <h1 style={{ display: 'inline', marginLeft:'5rem' }}><Badge color="dark">{'BAL : $$$'}</Badge>
                    </h1>
                </span>

            </Container>
        )
    }
}
