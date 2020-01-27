import userProfile_api from "../api/userProfile_api";

export const userProfile_action_types = {
  GETPROFILE_SUCCESS: "GETPROFILE_SUCCESS",
  ISLEADER_SUCCESS: "ISLEADER_SUCCESS",
  GETPROFILE_FAILURE: "GETPROFILE_FAILURE",
  CHANGELEADERAVAILABILITY_SUCCESS: "CHANGELEADERAVAILABILITY_SUCCESS",
  CHANGELEADERAVAILABILITY_FAILURE: "CHANGELEADERAVAILABILITY_FAILURE",
  CHANGETIME_SUCCESS:"CHANGETIME_SUCCESS",
  CHANGETIME_FAILURE:"CHANGETIME_FAILURE",
  FETCHCALENDAR_DATA_SUCCESS:"FETCHCALENDAR_DATA_SUCCESS",
  FETCHCALENDAR_DATA_FAILURE:"FETCHCALENDAR_DATA_FAILURE"
};
export const userProfile_success = data => {
  console.log("loginSuccess");
  return {
    type: userProfile_action_types.GETPROFILE_SUCCESS,
    data: data
  };
};

export const userProfile_failure = () => {
  return {
    type: userProfile_action_types.GETPROFILE_FAILURE
  };
};

export const isLeader_success = () => {
  return {
    type: userProfile_action_types.ISLEADER_SUCCESS
  };
};

export const change_leader_availability_success = () => {
  console.log("user reducer change availability success");
  return {
    type: userProfile_action_types.CHANGELEADERAVAILABILITY_SUCCESS
  };
};

export const change_leader_availability_failure = () => {
  console.log("user reducer change availability fail");
  return {
    type: userProfile_action_types.CHANGELEADERAVAILABILITY_FAILURE
  };
};

export const change_leader_freetime_success = data => {
  console.log("user reducer change free time success");
  return {
    type: userProfile_action_types.CHANGETIME_SUCCESS,
  };
};

export const change_leader_freetime_failure = () => {
  console.log("user reducer change free time fail");
  return {
    type: userProfile_action_types.CHANGETIME_FAILURE
  };
};

export const get_calander_data_success = (data) => {
  console.log("user reducer change free time success");
  return {
    type: userProfile_action_types.FETCHCALENDAR_DATA_SUCCESS,
    data : data
  };
};

export const get_calander_data_failure = () => {
  console.log("user reducer change free time fail");
  return {
    type: userProfile_action_types.FETCHCALENDAR_DATA_FAILURE
  };
};


export const userProfile = () => {
  // type: "login"
  console.log("userProfile_info");
  return async function (dispatch) {
    let response = await userProfile_api.userProfile();
    if (response == false) {
      console.log("there was an error with userProfile");
      dispatch(userProfile_failure());
    } else {
      console.log("in profile action,response is", response);
      dispatch(userProfile_success(response));
      if (response.is_leader)
        dispatch(isLeader_success());
    }
  };
};

export const changeAvailability = () => {
  return async function (dispatch) {
    let availability_response = await userProfile_api.changeAvailability();
    if (availability_response == false) {
      dispatch(change_leader_availability_failure());
    } else {
      dispatch(change_leader_availability_success());
    }
  }
}

export const changeFreeTime = (data) => {
  return async function (dispatch) {
    let availability_response = await userProfile_api.setFreeTime(data);
    if (availability_response == false) {
      dispatch(change_leader_availability_failure());
    } else {
      dispatch(change_leader_availability_success(data));
    }
  }
}

export const getCalenderData = () =>{
  return async function (dispatch) {
    let data_response = await userProfile_api.getCalenderData();
    if (data_response == false) {
      dispatch(get_calander_data_failure());
    } else {
      dispatch(get_calander_data_success(data_response));
    }
  }
}