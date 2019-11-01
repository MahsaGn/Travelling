import {session_action_types} from "../actions/login_action"

const initialState = {
    logged_in : false,
    login_error : false,
    access:null,
    refresh:null,
    username:"",
    password:""
}

export const Login_reducer = (state = initialState , action) => {
    console.log("in login reducer",action)
    switch(action.type){
        case "LOGIN_SUCCESS":
            return {
                logged_in:true
            }
        case "LOGOUT_SUCCESS" :
            return {
                logged_in:false
            }
        case "LOGIN_FAILURE":
            return {
                logged_in:false
            }
        case "FORM_CHANGE":
            return {
                ...state.login,
                [action.name]:action.value
            }
        default:
            return state
    }
}