import axios from "axios";
import store from "../../store.js";
import { connect } from "react-redux";
class leaderProfile_api {
  static leaderProfile = async leader_info => {
    console.log("in api leaderProfile");
    var lid = store.getState().leaderProfile_reducer.leader_id;
    console.log();
    try {
      axios
        .post(
          "http://localhost:8000/api/SpecificLeader/",
          { objID: "1" },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }
        )
        .then(() => {
          console.log("in specific Leader successfully");
          return true;
        });
    } catch {
      console.log("wrong leader profile");
      return false;
    }
  };
}
export default connect()(leaderProfile_api);
