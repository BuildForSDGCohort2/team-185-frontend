import axios from 'axios';
import {GET_INCOME_ITEMS, ADD_INCOME_ITEM, DELETE_INCOME_ITEM, INCOME_ITEMS_LOADING } from './types'

export const getIncomeItems = () => dispatch => {
    dispatch(setIncomeItemsLoading());
    axios
        .get('https://team-185-backend.herokuapp.com/api/income_items')
        .then(res => dispatch({
            type: GET_INCOME_ITEMS,
            payload: res.data
        }));

};

export const addIncomeItem = expense_item =>dispatch => {
    axios
        .post('https://team-185-backend.herokuapp.com/api/income_items', expense_item)
        .then(res => dispatch({
            type: ADD_INCOME_ITEM,
            payload: res.data
        }))
};

export const deleteIncomeItem = (id) => dispatch=> {
   axios
    .delete(`https://team-185-backend.herokuapp.com/api/income_items/${id}`)
    .then(res => dispatch ({
        type: DELETE_INCOME_ITEM,
        payload: id
    }))
};

export const setIncomeItemsLoading = () => {
    return {
        type: INCOME_ITEMS_LOADING
    }
}




