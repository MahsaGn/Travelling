import axios from 'axios'
import store from '../../store.js'
import {connect} from 'react-redux'
class userProfile_api{
static userProfile =async () => {
    console.log("in api userProfile")
    let access = store.getState().login_reducer.access
    console.log("acees is",access)
    try{
      let x = await axios.get('http://localhost:8000/api/me/leader/',{
        headers:
        {
          "Authorization" : `Bearer ${access}`,
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
      }})
        console.log("prfile data",x);  
        return x.data
        }catch{
            console.log("wrong userProfile")
            return false
        }
};
}export default connect()(userProfile_api)