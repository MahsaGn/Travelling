import {session_action_types} from "../actions/login_action"

const initialState = {
    signed_up:false
}

export const Signup_reducer = (state = initialState , action) => {
    console.log("in login reducer",action.type)
    switch(action.type){
        case "SIGNUP_SUCCESS":
            return  {
                ...state,
                signed_up:true
            }
        case "SIGNUP_FAILUR" :
            return {
                ...state,
                signed_up:false
            }
        default:
            return state
    }
}