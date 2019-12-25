const initialState = {
  travellouge_info: "",
  travellouge_id: "",
  ifTravellouge: false
};

export const travellouge_reducer = (state = initialState, action) => {
  console.log("in travellouge reducer", action);
  console.log("in travellouge reducer dataaaa", action.data);
  switch (action.type) {
    case "TRAVELLOUGEINFO_SUCCESS":
      return {
        ...state,
        ifTravellouge: true,
        travellouge_info: action.data
      };
    case "TRAVELLOUGEINFO_FAILURE":
      return {
        ...state,
        ifTravellouge: false
      };
    case "TRAVELLOUGE_ID":
      return {
        ...state,
        travellouge_id: action.id
      };
    default:
      return state;
  }
};
