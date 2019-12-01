import axios from "axios";
import store from "../../store.js";
import { connect } from "react-redux";
class place_api {
  static place = async () => {
    console.log("in api place", store.getState().place_reducer.place_id);
    try {
      let x = await axios.get(
        `http://127.0.0.1:8000/api/Places/UniquePlace/?search=${
          store.getState().place_reducer.place_id
        }`
      );
      console.log(x);
      return x.data;
    } catch {
      console.log("wrong place");
      return false;
    }
  };
}
export default connect()(place_api);
