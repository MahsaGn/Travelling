import axios from "axios";
import store from "../../store.js";
import { connect } from "react-redux";
class leaderProfile_api {
  static leaderProfile = async () => {
    console.log("in api leaderProfile");
    let usename = store.getState().leaderProfile_reducer.username;
    try {
      let x = await axios.get(
        `http://localhost:8000/api/SpecificLeader/search${1}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      );
      console.log(x);
      return x.data;
    } catch {
      console.log("wrong leaderProfile");
      return false;
    }
  };
}
export default connect()(leaderProfile_api);
