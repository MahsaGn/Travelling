import Auth_api from "../api/Auth_api";

export const login_action_types = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILUR',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    FORM_CHANGE:'FORM_CHANGE'
}
export const login_success = (acc,ref) => {
    console.log("loginSuccess")
    return {
        type: login_action_types.LOGIN_SUCCESS,
        access:acc,
        refresh:ref
    }
}  

export const login_failure = () => {
    return {
        type: login_action_types.LOGIN_FAILURE
    }
}                                                  

export const logout_success = () => {
    return {
        type: login_action_types.LOGOUT_SUCCESS
    }
}

export const login = (login_info) => {
    // type: "login"
    console.log("login_info",login_info)
    return  function (dispatch) {
        let response =  Auth_api.login(login_info)
            if(response==false){
                console.log('there was an error with login')
                dispatch(login_failure())
                console.log("after reducer")
            }else
            {
                console.log("befoe dispatch success login")
                dispatch(login_success(response.access,response.refresh))
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