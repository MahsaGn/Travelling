import axios from 'axios'
import FormData from 'form-data'
import store from '../../store.js'
import {connect} from 'react-redux'
class addTravelogu_api{
static addTravelogu =async () => {
  let travelouge_info= store.getState().addTravelogu_reducer.travelog_info
  let access =store.getState().login_reducer.access
  var formData = new FormData()
    //formData.append('palces', travelouge_info.choosedPlaces)
    formData.append('title', "a")
    formData.append('description',travelouge_info.text)
    formData.append('image3', travelouge_info.image3)
    formData.append('image1', travelouge_info.image1)
    formData.append('image2',travelouge_info.image2)
  console.log("in api add travelogu",formData.values())
  try{
    let x = await axios.post(`http://localhost:8000/api/Travellouge/travellouge-creation/`,
   formData
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
      }catch(e){

          console.log("wrong add travelogu",e.message)
          return false
      }
};
}
export default  connect()(addTravelogu_api)
