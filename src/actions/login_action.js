import store from '../store'
import Auth_api from "../api/Auth_api";
import { async } from 'q';

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
        payload:{
            logged_in : true,
            access:acc,
            refresh:ref
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
        type: session_action_types.LOGOUT_SUCCESS,
        payload:{
            logged_in : false,
            access:null,
            refresh:null
        }
    }
}

export const form_change = (name,value) => {
    const state = store.getState()
    console.log(state)
    return {
        type: session_action_types.FORM_CHANGE,
        payload:{
            ...state.login,
            [name]: value
        }
    }
}

export const loginAction = (user, pass) => {
    // type: "login"
    return async function (dispatch) {
        let response = await Auth_api.login_api(user, pass) 
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

export const ChangePropsAction = (name,value) =>{
    return function(dispatch) {
        store.dispatch(form_change(name,value))
    }
}