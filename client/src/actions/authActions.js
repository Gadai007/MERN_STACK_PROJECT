import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS
} from './types'
import { returnErrors, clearErrors} from './errorActions'
import axios from 'axios'

export const loadUser = () => (dispatch, getState) => {

    //User Loading
    dispatch({
        type: USER_LOADING
    })

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({ type: AUTH_ERROR })
        })
}

export const tokenConfig = (getState) => {
    //Get token from localStorage
    const token = getState().auth.token
    //header
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    //If token available
    if (token) {
        config.headers['x-auth-token'] = token
    }
    return config
}