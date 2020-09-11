import ReduxThunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
  auth: authReducer,
})

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk))
