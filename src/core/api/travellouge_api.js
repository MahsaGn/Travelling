import axios from 'axios'
import store from '../../store.js'
import {connect} from 'react-redux'
class travellouge_api{
static travellouge =async () => {
    console.log("in api place",store.getState().travellouge_reducer.travellouge_id)
    try{
      let x = await axios.get(`http://127.0.0.1:8000/api/Places/UniquePlace/?search=${store.getState().travellouge_reducer.travellouge_id}`)
        console.log(x);  
        return x.data
        }catch{
            console.log("wrong travellouge")
            return false
        }
};

}export default connect()(travellouge_api)