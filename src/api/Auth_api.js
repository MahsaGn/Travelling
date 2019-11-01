import axios from 'axios'
import store from '../store'
import { stat } from 'fs';
class Auth_api {
    static login_api = async () => {
        const state = store.getState().login
        console.log("in api login")
        try{
          let x = await axios.post('http://localhost:8000/api/token/', {
            username: state.username,
            password: state.password})
            console.log(x.data)
            return x.data
            }catch{
                console.log("wrong login")
                return false
            }
    };

    static signup_api = async () => {
        const state = store.getState()
        console.log("in api signup")
        try{
          let x =await axios.post('http://localhost:8000/api/sign-up/',{
            username:state.login.username,
            password:state.login.password,
            email:"",
            first_name:state.signup.firstname,
            last_name:state.signup.lastname,
            itinerary:state.signup.itinerary,
            phone_number:""
          })
            console.log(x.data)
            return x.data
            }catch{
                console.log("wrong signup")
                return false
            }
    };

}
export default Auth_api