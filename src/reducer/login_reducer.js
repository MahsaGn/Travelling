import {session_action_types} from "../actions/login_action"

const initialState = {
    logged_in : false,
    login_error : false,
    access:null,
    refresh:null
}

export const Login_reducer = (state = initialState , action) => {
    console.log("in login reducer",action.type)
    switch(action.type){
        case "LOGIN_SUCCESS":
            return action.payload
        case "LOGOUT_SUCCESS" :
            return action.payload
        case "LOGIN_FAILURE":
            return action.payload
        default:
            return state
    }
}