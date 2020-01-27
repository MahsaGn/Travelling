import leaderProfile_api from "../api/leaderProfile_api";

export const profile_action_types = {
  GETPROFILE_SUCCESS: "GETPROFILE_SUCCESS",
  GETPROFILE_FAILURE: "GETPROFILE_FAILURE",
  RATELEADER_SUCCESS: "RATELEADER_SUCCESS",
  RATELEADER_FAILURE: "RATELEADER_FAILURE",
  ID: "ID"
};
export const profile_success = data => {
  console.log("in profile action login success");
  return {
    type: profile_action_types.GETPROFILE_SUCCESS,
    data: data
  };
};

export const profile_failure = () => {
  console.log("in profile action login failure");
  return {
    type: profile_action_types.GETPROFILE_FAILURE
  };
};

export const profile_id = id => {
  return {
    type: profile_action_types.ID,
    id: id
  };
};

export const leaderPro_rateSuccess = () => {
  console.log("in leader rate action  success");
  return {
    type: profile_action_types.RATELEADER_SUCCESS,
  };
};

export const leaderPro_rateFailure = () => {
  console.log("in leader rate action login failure");
  return {
    type: profile_action_types.RATELEADER_FAILURE
  }
}

export const leaderProfile = id => {
  // type: "leader"
  console.log("leaderProfile info", id);
  return async function(dispatch) {
    dispatch(profile_id(id));
    let response = await leaderProfile_api.leaderProfile(id);
    if (response == false) {
      console.log("there was an error with leader Profile");
      dispatch(profile_failure());
      console.log("after reducer leaderProfile");
    } else {
      console.log("in leader profile action,response is", response);
      dispatch(profile_success(response));
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

export const userProfile = userid =>{
   // type: "leader"
   console.log("userProfile info", userid);
   return async function(dispatch) {
     dispatch(profile_id(userid));
     let response = await leaderProfile_api.userProfile(userid);
     if (response == false) {
       console.log("there was an error with user Profile");
       dispatch(profile_failure());
       console.log("after reducer user profile");
     } else {
       console.log("in user profile action,response is", response);
       dispatch(profile_success(response));
     }
   };
}