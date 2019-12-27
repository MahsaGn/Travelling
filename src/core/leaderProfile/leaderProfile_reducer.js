const initialState = {
  has_profileInfo: false,
  profile_info: "",
  id: "",
  isRateSaved:false
};

export const leaderProfile_reducer = (state = initialState, action) => {
  console.log("in leader Profile reducer", action);

  switch (action.type) {
    case "GETPROFILE_SUCCESS":
      return {
        ...state,
        has_profileInfo: true,
        profile_info: action.data
      };
    case "GETPROFILE_FAILURE":
      return {
        ...state,
        has_profileInfo: false
      };
      case "RATELEADER_SUCCESS":
        return {
          ...state,
          isRateSaved: true,
        };
      case "RATELEADER_FAILURE":
        return {
          ...state,
          isRateSaved: false
        };
    case "ID":
      return {
        ...state,
        id: action.id
      };
    default:
      return state;
  }
};
