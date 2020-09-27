import axios from 'axios';
import USER_LOADED, { USER_LOADING } from './errorActions';
import RETURN_ERRORS from 'module'
import { returnErrors } from '../reducers/errorReducer';
import { AUTH_ERROR } from './types';

//Check token and load user

export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch ({type : USER_LOADING});

    //Get token from local storage
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            "Content-type" : "application/json"
        }
    }

    //if token, add to headers
    if(token){
        config.headers['x-auth-token'] = token;
    }

    axios.get('/api/auth/user', config)
        .then(res => dispatch ({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
}
