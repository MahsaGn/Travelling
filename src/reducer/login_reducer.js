import {session_action_types} from "../actions/login_action"

const initialState = {
    logged_in : false,
    login_error : false
}

export const Login_reducer = (state = initialState , action) => {
    console.log("in login reducer")
    switch(action.type){
        case "LOGIN_SUCCESS":
            return{
                ...state,
                    logged_in:true
            }
        case "LOGOUT_SUCCESS" :
            return{
                ...state,
                    logged_in:false    
            }
        case "LOGIN_FAILURE":
            return{
                ...state,
                    login_error:'کاربری با  این مشخصات یافت نشد.'
            }
        default:
            return state
    }
}