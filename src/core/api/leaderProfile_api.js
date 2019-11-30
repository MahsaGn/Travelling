import axios from "axios";
import store from "../../store.js";
import { connect } from "react-redux";
class leaderProfile_api {
  static leaderProfile = async () => {
    console.log("in api leaderProfile");
    let usename = store.getState().leaderProfile_reducer.username;
    try {
      let x = {
        username: "fateme",
        password: "fateme"
        /*
        email: "fateme",
        first_name: "fateme",
        last_name: "fateme",
        itinerary: "fateme",
        phone_number: "fateme",
        avatar: "fateme"*/
      };
      console.log(x);
      return x.data;
    } catch {
      console.log("wrong leaderProfile");
      return false;
    }
  };
}
export default connect()(leaderProfile_api);
