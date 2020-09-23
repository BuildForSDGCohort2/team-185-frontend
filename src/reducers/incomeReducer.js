import {GET_INCOME_ITEMS, ADD_INCOME_ITEM, EDIT_INCOME_ITEM , DELETE_INCOME_ITEM, INCOME_ITEMS_LOADING } from '../actions/types'

const initialState = {
    income_items: [],
    loading:false
        
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_INCOME_ITEMS:
            return {
                ...state,
                income_items: action.payload,
                loading: false
            };
        case DELETE_INCOME_ITEM:
            return {
                ...state,
                income_items: state.income_items.filter(income_item => income_item._id !==action.payload)
            };

        case ADD_INCOME_ITEM:
            return {
                ...state,
                income_items: [action.payload, ...state.income_items]
            };

        case INCOME_ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        case EDIT_INCOME_ITEM :
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}