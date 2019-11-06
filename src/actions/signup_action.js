import store from '../store'
import Auth_api from "../api/Auth_api";
import {login_success,login_failure} from './login_action'
import { stat } from 'fs';

export const session_action_types = {
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
    SIGNUP_FAILUR: 'SIGNUP_FAILUR'
}

export const signup_failure = () => {
    return {
        type: session_action_types.SIGNUP_FAILUR,
    }
}



export const signup = (signup_info) => {
    // type: "login"
    return function (dispatch) {if(reenterPass() && signup_info.username!="" && signup_info.password!="")
        if(reenterPass(signup_info.password,signup_info.repassword)
         && signup_info.username!="" && signup_info.password!="")
        {
            return Auth_api.signup_api(signup_info)
            .then((response)=>{
                if(response!= false)
                {
                    console.log("after signup");
                    let login_info = {
                        username:signup_info.username,
                        password: signup_info.password
                    }
                    Auth_api.login(login_info).then((loginRes)=>{
                        if( loginRes==false )
                        {
                            console.log("after login")
                            dispatch(login_failure())
                        }
                        else
                            dispatch(login_success(loginRes.access,loginRes.refresh))
                        
                    })
                }
            })
        }
    }
}

  function reenterPass(password,repassword){
    if(password==repassword){
      return true;
    }
    return false;
  }
