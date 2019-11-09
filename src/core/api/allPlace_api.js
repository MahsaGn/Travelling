import axios from 'axios'
import store from '../../store.js'
import {connect} from 'react-redux'
class allPlace_api{
static allPlace =async () => {
    console.log("in api all places")
    try{
      let x = await axios.get(`http://127.0.0.1:8000/api/Places/ViewPlace`)
        console.log(x);  
        return x.data
        }catch{
            console.log("wrong all place")
            return false
        }
};
static addPlaceForLeader =async () => {
  console.log("in api add place  places",localStorage.access)
  try{
    let x = await axios.post(`http://localhost:8000/api/LeadPlace/`,
    {
      placeID:"5"
    }
    ,{
      headers:
       {
         "Authorization" : `Bearer ${localStorage.access}`,
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

}export default allPlace_api