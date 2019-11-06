import Auth_api from "../api/Auth_api";

export const signup_action_types = {
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
    SIGNUP_FAILUR: 'SIGNUP_FAILUR'
}

export const signup_failure = () => {
    return {
        type: signup_action_types.SIGNUP_FAILUR,
    }
}
export const signup_success = () => {
    return {
        type: signup_action_types.SIGNUP_SUCCESS,
    }
}


export const signup = (signup_info) => {
    // type: "login"
    console.log("in signup action",signup_info)
    return async function (dispatch) {
        if(reenterPass(signup_info.password,signup_info.repassword)
         && signup_info.username!="" && signup_info.password!="")
        {
            console.log("in signup action function",signup_info)
            let response =await Auth_api.signup(signup_info)
            try
            {
                if(response!= false)
                {
                    console.log("befoe dispatch success signup")
                    dispatch(signup_success())
                    // console.log("after signup");
                    // let login_info = {
                    //     username:signup_info.username,
                    //     password: signup_info.password
                    // }
                    // await dispatch(login(login_info))
                    // console.log("after login dispathch in sighup")
                    return 
                }
            }catch{
                console.log("befoe dispatch cash signup")
                dispatch(signup_failure())
                console.log("in chash after signup post")
                return
            }
        }
    }
}

  function reenterPass(password,repassword){
    if(password==repassword){
      return true;
    }
    return false;
  }
