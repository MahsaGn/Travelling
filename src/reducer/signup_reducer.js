import {session_action_types} from "../actions/login_action"

const initialState = {
    username:"",
    password:"",
    repassword:"",
    itinerary:"",
    firstname:"",
    lastname:""
}

export const Signup_reducer = (state = initialState , action) => {
    console.log("in login reducer",action.type)
    switch(action.type){
        case "SIGNUP_SUCCESS":
            return action.payload
        case "SIGNUP_FAILUR" :
            return action.payload
        case "FORM_CHANGE":
            return action.payload   
        default:
            return state
    }
}