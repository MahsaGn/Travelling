import axios from 'axios'
import store from '../../store.js'
import {connect} from 'react-redux'
class addPlaceForLeader_api{

static addPlaceForLeader =async () => {
  let choosedPlace = store.getState().addPlaceForLeader_reducer.choosedPlace
  let access =store.getState().login_reducer.access
        console.log("access is ",access)
  console.log("in api all places",choosedPlace)
  try{
    let x = await axios.post(`http://localhost:8000/api/LeadPlace/`,
    {
      placeID:choosedPlace
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
          console.log("wrong all place")
          return false
      }
};

}export default connect()(addPlaceForLeader_api)
