const initialState = {
  is_leader: false,
  has_profileInfo: false,
  profile_info: "",
  isChanged: false,
  freetime_changed: false,
  freetime_scheduler: "",
  fetrched_freeTime:false,
};

export const userProfile_reducer = (state = initialState, action) => {
  console.log("in userProfile reducer", action);
  switch (action.type) {
    case "GETPROFILE_SUCCESS":
      return {
        ...state,
        has_profileInfo: true,
        profile_info: action.data
      };
    case "ISLEADER_SUCCESS":
      return {
        ...state,
        is_leader: true
      };
    case "GETPROFILE_FAILURE":
      return {
        ...state,
        has_profileInfo: false
      };

    case "CHANGELEADERAVAILABILITY_SUCCESS":
      return {
        ...state,
        isChanged: true
      };
    case "CHANGELEADERAVAILABILITY_FAILURE":
      return {
        ...state,
        isChanged: false
      };
    case "CHANGETIME_SUCCESS":
      return {
        ...state,
        freetime_changed: true
      };
    case "CHANGETIME_FAILURE":
      return {
        ...state,
        freetime_changed: false
      };
      case "FETCHCALENDAR_DATA_SUCCESS":
        return {
          ...state,
          freetime_scheduler: action.data,
          fetrched_freeTime: true
        };
      case "FETCHCALENDAR_DATA_FAILURE":
        return {
          ...state,
          fetrched_freeTime: false
        };
    default:
      return state;
  }
};
