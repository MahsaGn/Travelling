import axios from 'axios'
class Auth_api {
    static login_api = async (user, pass) => {
        console.log("in api login")
        try{
          let x = await axios.post('http://localhost:8000/api/token/', {
            username: user,
            password: pass})
            console.log(x.data)
            return x.data
            }catch{
                console.log("wrong login")
                return false
            }
    };

    static signup_api = async (user, pass,first,last,iti) => {
        console.log("in api signup")
        try{
          let x =await axios.post('http://localhost:8000/api/sign-up/',{
            username:user,
            password:pass,
            email:"",
            first_name:first,
            last_name:last,
            itinerary:iti,
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