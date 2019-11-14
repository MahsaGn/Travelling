import axios from 'axios'
import store from '../../store.js'
import {connect} from 'react-redux'
class addTravelogu_api{
static addTravelogu =async () => {
  let choosedPlaces = store.getState().addTravelogu_reducer.choosedPlaces
  let access =store.getState().login_reducer.access
  console.log("in api all places",choosedPlaces)
  try{
    let x = await axios.post(`http://localhost:8000/api/LeadPlace/`,
    {
      places:choosedPlaces
    }
    ,{
      headers:
       {
         "Authorization" : `Bearer ${access}`,
         'Accept' : 'application/json',
         'Content-Type': 'application/json'
     }
    })
      console.log(x);  
      return x.data
      }catch{
          console.log("wrong add travelogu")
          return false
      }
};

}export default connect()(addTravelogu_api)
