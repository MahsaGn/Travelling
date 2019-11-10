import axios from 'axios'
import FormData from 'form-data'
class AuthApi{
static login =async (login_info) => {
    console.log("in api login",login_info.username,login_info.password)
    try{
      let x = await axios.post('http://localhost:8000/api/token/', {
        username: login_info.username,
        password: login_info.password
      },{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
    )
        return x.data
        }catch{
            console.log("wrong login")
            return false
        }
};

static  signup = async (signup_info) => {
    console.log("in api signup",signup_info)
    var formData = new FormData()
    formData.append('username', signup_info.username)
    formData.append('password',signup_info.password)
    formData.append('email', "")
    formData.append('first_name', signup_info.firstname)
    formData.append('last_name',signup_info.lastname)
    formData.append('itinerary', signup_info.itinerary)
    formData.append('phone_number', "87436983798")
    formData.append('avatar',signup_info.image)
    console.log(formData.values())
    try{
      let x =await axios.post('http://localhost:8000/api/sign-up/',formData)
      console.log("after then signup")
       return true
        }catch{
            console.log("wrong signup")
            return false
        }
};
}export default AuthApi