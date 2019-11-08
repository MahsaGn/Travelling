import axios from 'axios'
import store from '../../store.js'
import {connect} from 'react-redux'
class sortPlace_api{
static sortPlace =async () => {
    console.log("in api sortplace",store.getState().sortPlace_reducer.sorted_option)
    try{
      let x = await axios.get(`http://127.0.0.1:8000/api/Places/ViewPlace/?option=${store.getState().sortPlace_reducer.searchedPlace_val}`)
        console.log("response api sortPlace",x);  
        return x.data
        }catch{
            console.log("wrong sortplace")
            return false
        }
};

}export default connect()(sortPlace_api)