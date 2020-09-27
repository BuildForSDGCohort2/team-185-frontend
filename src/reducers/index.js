import { combineReducers} from 'redux';
import expenseReducer from './expenseReducer';
import incomeReducer from './incomeReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer'

export default combineReducers ({
    expense_item: expenseReducer,
    income_item: incomeReducer,
    auth: authReducer,
    error: errorReducer
});
