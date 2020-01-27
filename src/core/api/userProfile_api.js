import axios from 'axios'
import store from '../../store.js'
import { connect } from 'react-redux'
import FormData from 'form-data'


class userProfile_api {
  static userProfile = async () => {
    console.log("in api userProfile")
    let access = store.getState().login_reducer.access
    console.log("acees is", access)
    try {
      let x = await axios.post('http://localhost:8000/api/User/me/',
        {
        },
        {
          headers:
          {
            "Authorization": `Bearer ${access}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
      console.log("prfile data", x);
      return x.data
    } catch{
      console.log("wrong userProfile")
      return false
    }
  };

  static changeAvailability = async () => {
    console.log("in api changeAvailability");
    let access = store.getState().login_reducer.access;
    console.log("acees is", access);
    try {
      let x = await axios.post("http://localhost:8000/api/User/ChangeAvailability/", {}, {
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

  static getCalenderData = async () => {
    console.log("in api changeAvailability");
    let access = store.getState().login_reducer.access;
    let leaderId = store.getState().userProfile_reducer.profile_info.id;
    console.log("acees is", access);
    try {
      let x = await axios.post("http://localhost:8000/api/User/ChangeAvailability/", {
        leaderID: leaderId
      }, {
        headers: {
          Authorization: `Bearer ${access}`,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      console.log("fetch calender data", x);
      return x.data;
    } catch {
      console.log("wrong fetch calender data");
      return false;
    }
  };

  static delFreeTime = async (data) => {
    console.log(data)
    console.log("in api set free time");
    let access = store.getState().login_reducer.access;
    console.log("acees is", access);
    var formdata = new FormData()
    var datestr = data.StartTime
    formdata.append("start", datestr);
    datestr = data.EndTime
    formdata.append("end", datestr);
    console.log("json is", formdata)
    try {

      let x = await axios.delete("http://localhost:8000/api/User/SetFreeTime/",
      {
        headers: {
          Authorization: `Bearer ${access}`,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }, {
      data: {
        StartTime: data.StartTime,
        EndTime: data.EndTime

      }
    });
      console.log("availability data", x);
      return true;
    } catch {
      console.log("wrong userProfile");
      return false;
    }
  };

  static setFreeTime = async (data) => {
    console.log("in api set free time");
    let access = store.getState().login_reducer.access;
    console.log("acees is", access);
    var formdata = new FormData()
    var datestr = data.StartTime
    formdata.append("start", datestr);
    datestr = data.EndTime
    formdata.append("end", datestr);
    console.log("json is", formdata)
    try {

      let x = await axios.post("http://localhost:8000/api/User/SetFreeTime/",
        {
          StartTime: data.StartTime,
          EndTime: data.EndTime

        }
        , {
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
} export default connect()(userProfile_api)