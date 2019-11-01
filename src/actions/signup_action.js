import store from '../store'
import Auth_api from "../api/Auth_api";
import {login_success,login_failure} from './login_action'
import { stat } from 'fs';

export const session_action_types = {
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
    SIGNUP_FAILUR: 'SIGNUP_FAILUR'
}
const state = store.getState()


export const signup_failure = () => {
    return {
        type: session_action_types.SIGNUP_FAILUR,
        playload:{
            signed_up:false,
            username:state.signup.username,
            password:state.signup.password,
            repassword:state.signup.repassword,
            itinerary:state.signup.itinerary,
            firstname:state.signup.firstname,
            lastname:state.signup.lastname
        }
    }
}



export const signupAction = () => {
    // type: "login"
    return async function (dispatch) {
        let response = await Auth_api.signup_api()
        console.log("response",response)
        if(response!= false)
        {
            let loginRes = await Auth_api.login_api()
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

export async function signupSubmitAction(e) {
    if(this.reenterPass() && state.username!="" && state.password!="")
    {
      console.log("in handel submit")
      e.preventDefault();
      await signupAction()()
      if(state.logged_in ==true)
        return window.location.replace('/')
    } 
    else{
      e.preventDefault();
      alert("موارد خواسته شده به درستی پر نشده اند")
      this.setState({
        password:"",
        repassword:""})
    }
  }
