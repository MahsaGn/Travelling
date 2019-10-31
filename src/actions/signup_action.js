import store from '../store'
import Auth_api from "../api/Auth_api";
import { async } from 'q';
import {login_success,login_failure} from './login_action'

export const session_action_types = {
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
    SIGNUP_FAILUR: 'SIGNUP_FAILUR'
}


export const signup_failure = () => {
    return {
        type: session_action_types.SIGNUP_FAILUR,
        signed_up:false
    }
}



export const signupAction = (user, pass,first,last,iti) => {
    // type: "login"
    return async function (dispatch) {
        let response = await Auth_api.signup_api(user,pass,first,last,iti)
        console.log("response",response)
        if(response!= false)
        {
            let loginRes = await Auth_api.login_api(user,pass)
            if( loginRes==false ){
                console.log('there was an error with login')
                store.dispatch(login_failure())
                console.log("after reducer")
            }
            else
            {
                console.log("loginSuccess")
                store.dispatch(login_success(loginRes.access,loginRes.refresh))
            }
        }else{
            store.dispatch(signup_failure(response.access,response.refresh))
        }
    }

}
