import axios from 'axios'
import store from '../../store.js'
import {connect} from 'react-redux'
class searchedPlace_api{
static searchedPlace =async () => {
    console.log("in api searchedplace",store.getState().searchedPlace_reducer.searched_val)
    try{
      let x = await axios.get(`http://127.0.0.1:8000/api/Places/ViewPlace/?search=${store.getState().searchedPlace_reducer.searchedPlace_val}`)
        console.log("response api searchedPlace",x);  
        return x.data
        }catch{
            console.log("wrong searchedplace")
            return false
        }
};

}export default connect()(searchedPlace_api)