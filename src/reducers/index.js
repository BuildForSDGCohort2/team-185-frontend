import { combineReducers} from 'redux';
import expenseReducer from './expenseReducer';
import incomeReducer from './incomeReducer';

export default combineReducers ({
    expense_item: expenseReducer,
    income_item: incomeReducer 
});
