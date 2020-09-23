import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button, Modal, Table} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import PropTypes  from 'prop-types'
import { connect} from 'react-redux'
import { getIncomeItems, deleteIncomeItem} from '../actions/incomeActions'


export class Income extends Component {
    componentDidMount() {
        this.props.getIncomeItems();
    }

    onDeleteIncomeClick = (id) => {
        this.props.deleteIncomeItem(id);
    }

    render() {
        const {income_items} = this.props.income_item;
        return (
            <Container>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Date</th>
                <th>Income Items</th>
                <th>Amount</th>
                <th>Action</th>
                </tr>
            </thead>
            {income_items.map(({_id, description, createdAt, amount})=>
                <tbody key={_id}>
                <tr>
                    <td>{ createdAt }</td>
                    <td>{description}</td>
                    <td>KES: { amount}</td>
                    <td>
                    <Button className="remove-btn" color="dark" size="sm"
                            onClick = {this.onDeleteIncomeClick.bind(this,_id)}>
                               Delete 
                            </Button>
                            

                            <Button className="remove-btn" color="success" size="sm" style={{  }}>
                               Edit 
                            </Button>
                    </td>
                </tr>
            </tbody>)}
            
            </Table>
    </Container>  
        )
    }
}

Income.protoTypes = {
    getIncomeItems: PropTypes.func.isRequired,
    deleteIncomeItem: PropTypes.func.isRequired,
    income_item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    income_item: state.income_item
});

export default connect(mapStateToProps, {getIncomeItems, deleteIncomeItem})(Income);

