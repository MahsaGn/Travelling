import axios from "axios";
import store from "../../store.js";
import { connect } from "react-redux";
class changeAvailability_api {
  static changeAvailability = async () => {
    console.log("in api changeAvailability");
    let access = store.getState().login_reducer.access;
    console.log("acees is", access);
    try {
      let x = await axios.get("http://localhost:8000/api/ChangeAvailability/", {
        headers: {
          Authorization: `Bearer ${access}`,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      console.log("availability data", x);
      return true;
    } catch {
      console.log("wrong userProfile");
      return false;
    }
  };
}
export default connect()(changeAvailability_api);
