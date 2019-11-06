import axios from 'axios'
import store from '../store'
class AuthApi{
static login = (login_info) => {
    console.log("in api login",login_info.username,login_info.password)
    try{
      axios.post('http://localhost:8000/api/token/', {
        username: login_info.username,
        password: login_info.password})
        .then((x)=>{
          console.log(x.data)
          return x.data
        })
        }catch{
            console.log("wrong login")
            return false
        }
};

static  signup_api = () => {
    const state = store.getState()
    console.log("in api signup")
    try{
      let x = axios.post('http://localhost:8000/api/sign-up/',{
        username:state.login.username,
        password:state.login.password,
        email:"",
        first_name:state.signup.firstname,
        last_name:state.signup.lastname,
        itinerary:state.signup.itinerary,
        phone_number:""
      })
        x.then((x)=>{
          console.log(x.data)
          return x.data
        })
        }catch{
            console.log("wrong signup")
            return false
        }
};
}export default AuthApi