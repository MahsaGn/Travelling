import axios from 'axios'
class Auth_api {
    static handleSubmit = async (user, pass) => {
        console.log("in api")
        try{
          let x = await axios.post('http://localhost:8000/api/token/', {
            username: user,
            password: pass})
            console.log(x.data)
            return x.data
            }catch{
                console.log("wrong")
                return false
            }
    };

}
export default Auth_api