import axios from 'axios';
import {GET_EXPENSE_ITEMS, GET_EXPENSE_AMOUNT_ITEMS, ADD_EXPENSE_ITEM, DELETE_EXPENSE_ITEM, EXPENSE_ITEMS_LOADING } from './types'

export const getExpenseItems = () => dispatch => {
    dispatch(setExpenseItemsLoading());
    axios
        .get('/api/expense_items')
        .then(res => dispatch({
            type: GET_EXPENSE_ITEMS,
            payload: res.data
        }));

};

export const addExpenseItem = expense_item =>dispatch => {
    axios
        .post('/api/expense_items', expense_item)
        .then(res => dispatch({
            type: ADD_EXPENSE_ITEM,
            payload: res.data
        }))
};

export const deleteExpenseItem = (id) => dispatch=> {
   axios
    .delete(`/api/expense_items/${id}`)
    .then(res => dispatch ({
        type: DELETE_EXPENSE_ITEM,
        payload: id
    }))
};

export const setExpenseItemsLoading = () => {
    return {
        type: EXPENSE_ITEMS_LOADING
    }
}

export const getExpenseAmountItems = () => dispatch => {
    dispatch(setExpenseItemsLoading());
    axios
        .get('/api/expense_items')
        .then(res => dispatch({
            type: GET_EXPENSE_AMOUNT_ITEMS,
            payload: res.data
        }));

};




