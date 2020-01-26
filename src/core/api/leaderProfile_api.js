import axios from "axios";
import store from "../../store.js";
import { connect } from "react-redux";
class leaderProfile_api {
  static leaderProfile = async leader_info => {
    let access = store.getState().login_reducer.access
    console.log("leader info api leader", leader_info, access);
    console.log("in api leaderProfile");
    var lid = store.getState().leaderProfile_reducer.id;
    console.log(lid);
    try {
      let x = await axios.post(
        "http://localhost:8000/api/User/me/",
        {
          leaderID : lid
        },
        {
          headers: {
            "Authorization": `Bearer ${access}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );
      console.log("leader prodile data", x);
      return x.data;
    } catch {
      console.log("wrong leader profile");
      return false;
    }
  };

  static userProfile = async userid => {
    let access = store.getState().login_reducer.access
    console.log("user profile api user", userid, access);
    console.log("in api userProfile");
    var userId = store.getState().leaderProfile_reducer.id;
    console.log(userId);
    try {
      let x = await axios.post(
        "http://localhost:8000/api/User/me/",
        {
          userID : userId
        },
        {
          headers: {
            "Authorization": `Bearer ${access}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );
      console.log("user prodile data", x);
      return x.data;
    } catch {
      console.log("wrong user profile");
      return false;
    }
  };

  static leaderProfile_rateValue = async rateValue => {
    console.log("leader rate value api leader", rateValue);
    console.log("in api leaderProfile");
    let access = store.getState().login_reducer.access
    console.log("access",access)
    var lid = store.getState().leaderProfile_reducer.leader_id;
    console.log("leaderis ",lid)
    try {
      let x = await axios.post(
        "http://localhost:8000/api/User/RateLeader/",
        {
          LeaderID: lid,
          rate: rateValue
        },
        {
          headers:
          {
            "Authorization": `Bearer ${access}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );
      console.log("leader prodile data", x);
      return true;
    } catch {
      console.log("wrong leader profile");
      return false;
    }

  }
}
export default connect()(leaderProfile_api);
