import {GET_EXPENSE_ITEMS, GET_EXPENSE_AMOUNT_ITEMS,  ADD_EXPENSE_ITEM, EDIT_EXPENSE_ITEM , DELETE_EXPENSE_ITEM, EXPENSE_ITEMS_LOADING } from '../actions/types'

const initialState = {
    expense_items: [],
    loading:false
        
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_EXPENSE_ITEMS:
            return {
                ...state,
                expense_items: action.payload,
                loading: false
            };
        case DELETE_EXPENSE_ITEM:
            return {
                ...state,
                expense_items: state.expense_items.filter(expense_item => expense_item._id !==action.payload)
            };

        case ADD_EXPENSE_ITEM:
            return {
                ...state,
                expense_items: [action.payload, ...state.expense_items]
            };

        case EXPENSE_ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        case EDIT_EXPENSE_ITEM :
            return {
                ...state,
                loading: true
            }

        case GET_EXPENSE_AMOUNT_ITEMS :
            return {
                ...state,
                all_expense_amounts: action.payload,
                loading: false
            };
        default:
            return state;
    }
}