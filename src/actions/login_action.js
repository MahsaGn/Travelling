import Auth_api from "../api/Auth_api";

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

export const login = (login_info) => {
    // type: "login"
    console.log("login_info",login_info)
    return function (dispatch) {
        try{
            return Auth_api.login(login_info).then((response)=>{
            dispatch(login_success(response.access,response.refresh))
        })}catch{
            console.log('there was an error with login')
            dispatch(login_failure())
            console.log("after reducer")
        }      
    }
}
export const logout = () => {
    // type: "logout"
    console.log("logout action")
    return function (dispatch) {
        dispatch(logout_success())
    }
}