import leaderProfile_api from "../api/leaderProfile_api";

export const leaderProfile_action_types = {
  GETPROFILE_SUCCESS: "GETPROFILE_SUCCESS",
  ISLEADER_SUCCESS: "ISLEADER_SUCCESS",
  GETPROFILE_FAILURE: "GETPROFILE_FAILURE",
  RATELEADER_SUCCESS: "RATELEADER_SUCCESS",
  RATELEADER_FAILURE: "RATELEADER_FAILURE",
  LEADER_ID: "LEADER_ID"
};
export const leaderProfile_success = data => {
  console.log("in leader action login success");
  return {
    type: leaderProfile_action_types.GETPROFILE_SUCCESS,
    data: data
  };
};

export const leaderProfile_failure = () => {
  console.log("in leader action login failure");
  return {
    type: leaderProfile_action_types.GETPROFILE_FAILURE
  };
};

export const leaderProfile_id = id => {
  return {
    type: leaderProfile_action_types.LEADER_ID,
    id: id
  };
};

export const leaderPro_rateSuccess = () => {
  console.log("in leader rate action  success");
  return {
    type: leaderProfile_action_types.RATELEADER_SUCCESS,
  };
};

export const leaderPro_rateFailure = () => {
  console.log("in leader rate action login failure");
  return {
    type: leaderProfile_action_types.RATELEADER_FAILURE
  }
}

export const leaderProfile = id => {
  // type: "leader"
  console.log("leaderProfile info", id);
  return async function(dispatch) {
    dispatch(leaderProfile_id(id));
    let response = await leaderProfile_api.leaderProfile(id);
    if (response == false) {
      console.log("there was an error with leader Profile");
      dispatch(leaderProfile_failure());
      console.log("after reducer leaderProfile");
    } else {
      console.log("in leader profile action,response is", response);
      dispatch(leaderProfile_success(response));
    }
  };
};

export const saveRateLeader = rateVal =>{
  console.log("leaderProfile rate value", rateVal);
  return async function(dispatch) {
    let response = await leaderProfile_api.leaderProfile_rateValue(rateVal);
    console.log("response rate is ",response)
    if (response == false) {
      console.log("there was an error with leader Profile")
      dispatch(leaderPro_rateFailure())
      //console.log("after reducer leaderProfile rateValue");
    } else {
      //console.log("in leader profile rateValue action");
      dispatch(leaderPro_rateSuccess())
    }
  };
}