import {session_action_types} from "../actions/login_action"

const initialState = {
    logged_in : false,
    access:null,
    refresh:null,
}

export const login_reducer = (state = initialState , action) => {
    console.log("in login reducer",action)
    switch(action.type){
        case "LOGIN_SUCCESS":
            return {
                logged_in:true,
                access:action.access,
                refresh:action.refresh
            }
        case "LOGOUT_SUCCESS" :
            return {
                logged_in:false
            }
        case "LOGIN_FAILURE":
            return {
                logged_in:false
            }
        default:
            return state
    }
}