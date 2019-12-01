import axios from "axios";
import store from "../../store.js";
import { connect } from "react-redux";
class leaderProfile_api {
  static leaderProfile = async leader_info => {
    console.log("in api leaderProfile");
    console.log(store.getState().leaderProfile_reducer.leader_id);
    try {
      axios
        .post(
          "http://localhost:8000/api/SpecificLeader/",
          {
            id: leader_info.id,
            is_available: leader_info.is_available,
            nationalID: leader_info.nationalID,
            has_car: leader_info.has_car,
            car_capacity: leader_info.car_capacity,
            car_model: leader_info.car_model,
            gender: leader_info.gender,
            age: leader_info.age,
            userID: leader_info.userID,
            username: leader_info.username,
            email: leader_info.email,
            first_name: leader_info.first_name,
            last_name: leader_info.last_name,
            is_leader: leader_info.is_leader,
            password: leader_info.password,
            itinenary: leader_info.itinenary,
            phone_number: leader_info.phone_number,
            avatar: leader_info.avatar
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.access}`,
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }
        )
        .then(() => {
          console.log("");
          return true;
        });
    } catch {
      console.log("wrong becomeLeder");
      return false;
    }
  };
}
export default connect()(leaderProfile_api);
