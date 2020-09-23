import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button, Modal, Table} from 'reactstrap';
import { connect} from 'react-redux';
import { getExpenseItems, deleteExpenseItem} from '../actions/expenseActions';
import PropTypes  from 'prop-types';

export class Expense extends Component {

    componentDidMount() {
        this.props.getExpenseItems();
    }

    onDeleteExpenseClick = (id) => {
        this.props.deleteExpenseItem(id);
    }
   

    render() {
        const {expense_items} = this.props.expense_item;
        return (
            <Container>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Expenditure Incurred</th>
                        <th>Amount</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    {expense_items.map(({_id, description, createdAt, amount})=>
                        <tbody key={_id}>
                        <tr>
                            <td>{ createdAt }</td>
                            <td>{description}</td>
                            <td>KES: { amount}</td>
                            <td>
                            <Button className="remove-btn" color="dark" size="sm"
                                    onClick = {this.onDeleteExpenseClick.bind(this,_id)}>
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


Expense.propTypes = {
    getExpenseItems: PropTypes.func.isRequired,
    deleteExpenseItem: PropTypes.func.isRequired,
    expense_item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    expense_item: state.expense_item
});

export default connect(mapStateToProps, {getExpenseItems, deleteExpenseItem})(Expense);

