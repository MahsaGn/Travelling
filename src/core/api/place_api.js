import axios from "axios";
import store from "../../store.js";
import { connect } from "react-redux";
import FormData from "form-data";

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

  static palce_travellouges = async () => {
    let id = store.getState().place_reducer.place_id;
    console.log("travellouge place id", id);
    try {
      let x = await axios.post(
        `http://127.0.0.1:8000/api/Travellouge/place-travellouges/`,
        {
          placeID: id
        }
      );
      console.log("travellouge inf id", x);
      return x.data;
    } catch {
      console.log("wrong travelouges place");
      return false;
    }
  };
}
export default connect()(place_api);
