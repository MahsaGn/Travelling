import axios from 'axios'
import store from '../../store.js'
import {connect} from 'react-redux'
class sortPlace_api{
static sortPlace =async () => {
    console.log("in api sortplace",store.getState().sortPlace_reducer.sortPlace_option)
    try{
      let x = await axios.get(`http://127.0.0.1:8000/api/Places/ViewPlace/?ordering=${store.getState().sortPlace_reducer.sortPlace_option}&search=ک`)
        console.log("response api sortPlace",x);  
        return x.data
        }catch{
            console.log("wrong sortplace")
            return false
        }
};

}export default connect()(sortPlace_api)