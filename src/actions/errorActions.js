import axios from 'axios';
import USER_LOADED, { USER_LOADING } from './types';

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
            type
        }))
}
