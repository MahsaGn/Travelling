import {connect} from react-redux;
import store from '../../store.js';

class homePage_api{
    static homePage =async () => {
    console.log("in api home");
    try{
      let x = await axios.get(`http://127.0.0.1:8000/api/Places/UniquePlace/?search=${store.getState().homePage_reducer}`)
        console.log(x);  
        return x.data
        }catch{
            console.log("wrong")
            return false
        }
};  
}
export default connect()(homePage_api);