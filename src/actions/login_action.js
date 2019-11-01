import Auth_api from "../api/Auth_api";
import { async } from 'q';
import store from '../store'

export const session_action_types = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILUR',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    FORM_CHANGE:'FORM_CHANGE'
}
export const login_success = (acc,ref) => {
    console.log("loginSuccess")
    return {
        type: session_action_types.LOGIN_SUCCESS,
        access:acc,
        refresh:ref
    }
}    


export const login_failure = () => {
    return {
        type: session_action_types.LOGIN_FAILURE
    }
}

export const logout_success = () => {
    return {
        type: session_action_types.LOGOUT_SUCCESS
    }
}

export const form_change = (name,value) => {
    return {
        type: session_action_types.FORM_CHANGE,
        name : name,
        value: value
    }
}

export const loginAction = () => {
    // type: "login"
    return async function (dispatch) {
        let response = await Auth_api.login_api() 
        console.log("responce:",response)
        if( response==false ){
            console.log('there was an error with login')
            store.dispatch(login_failure())
            console.log("after reducer")
        }
        else
            store.dispatch(login_success(response.access,response.refresh))
    }
}
export const logoutAction = () => {
    // type: "logout"
    console.log("logout action")
    return function (dispatch) {
        store.dispatch(logout_success())
    }
}

export const ChangePropsAction = (user,pass) =>{
    return function(dispatch) {
        store.dispatch(form_change(user,pass))
    }
}