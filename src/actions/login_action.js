import store from '../store'
import Auth_api from "../api/Auth_api";
import { async } from 'q';

export const session_action_types = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILUR',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS'
}

export const login_success = () => {
    console.log("loginSuccess")
    return {
        type: session_action_types.LOGIN_SUCCESS,
        payload:{
            logged_in : true
        }
    }
}

export const login_failure = () => {
    return {
        type: session_action_types.LOGIN_FAILURE,
    }
}

export const logout_success = () => {
    return {
        type: session_action_types.LOGIN_SUCCESS,
        payload:{
            logged_in : false
        }
    }
}


export const loginAction = (user, pass) => {
    // type: "login"
    console.log("befor return")
    return async function (dispatch) {
        let response = await Auth_api.handleSubmit(user, pass) 
        console.log("responce:",response)
        if( response==false ){
            console.log('there was an error with login')
            store.dispatch(login_failure())
            console.log("after reducer")
        }
        else{
            store.dispatch(login_success())
            console.log("store:",store.getState())

        }

    }
}