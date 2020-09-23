import React, { Component } from 'react'
import {Container, ListGroup, ListItem, ListGroupItem, Button, Modal, Row, Col, Badge} from 'reactstrap';
import { getExpenseItems} from '../actions/expenseActions';
import { connect} from 'react-redux';
import PropTypes  from 'prop-types';
import { ContentFlag } from 'material-ui/svg-icons';

class ExpenseSummary extends Component {

    componentDidMount() {
        this.props.getExpenseItems();
    }

    
    render() {
        let allExpenseItemAmount = []
        const {expense_items} = this.props.expense_item;
        const makeArray = expense_items.forEach(amount => allExpenseItemAmount.push(amount.amount))
        const totalExpenseItemsAmounts = allExpenseItemAmount.reduce((total, expenseItemAmount) => total + expenseItemAmount, 0)


        return (
            <Container>
                 <hr color="dark"></hr>
                <Row style={{ marginTop: '1rem', marginBottom: '1rem'}}>
                    <Col xs="6" sm="4"><h3><Badge color="dark">{'This Month : $$$'}</Badge></h3></Col>
                    <Col xs="6" sm="4"><h3><Badge color="dark">{'This Week : $$$'}</Badge></h3></Col>
                    <Col sm="4"><h3><Badge color="dark">{`Today: ${totalExpenseItemsAmounts}.00`}</Badge></h3></Col>
                </Row>   
                <hr color="dark"></hr>
            </Container>
        )
    }
}

ExpenseSummary.propTypes = {
    getExpenseItems: PropTypes.func.isRequired,
    expense_item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    expense_item: state.expense_item
});

export default connect(mapStateToProps, {getExpenseItems})(ExpenseSummary);
