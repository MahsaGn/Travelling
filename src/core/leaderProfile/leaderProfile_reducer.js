const initialState = {
  has_profileInfo: false,
  profile_info: "",
  leader_id: ""
};

export const leaderProfile_reducer = (state = initialState, action) => {
  console.log("inleaderProfile reducer", action);

  switch (action.type) {
    case "GETPROFILE_SUCCESS":
      return {
        ...state,
        has_profileInfo: true,
        profile_info: action.data[0]
      };
    case "GETPROFILE_FAILURE":
      return {
        ...state,
        has_profileInfo: false
      };
    case "GETLEADER_ID":
      return {
        ...state,
        leader_id: action.id
      };
    default:
      return state;
  }
};
