import axios from 'axios'
class AuthApi{
static login =async (login_info) => {
    console.log("in api login",login_info.username,login_info.password)
    try{
      let x = await axios.post('http://localhost:8000/api/token/', {
        username: login_info.username,
        password: login_info.password})
        console.log(x);  
        return x.data
        }catch{
            console.log("wrong login")
            return false
        }
};

static  signup = async (signup_info) => {
    console.log("in api signup",signup_info)
    try{
      let x =await axios.post('http://localhost:8000/api/sign-up/',{
        username:signup_info.username,
        password:signup_info.password,
        email:"",
        first_name:signup_info.firstname,
        last_name:signup_info.lastname,
        itinerary:signup_info.itinerary,
        phone_number:"",
        avatar:signup_info.image
      })
      console.log("after then signup")
       return true
        }catch{
            console.log("wrong signup")
            return false
        }
};
}export default AuthApi