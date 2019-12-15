import place_api from "../api/place_api";

export const place_action_types = {
  PLACEINFO_SUCCESS: "PLACEINFO_SUCCESS",
  PLACEINFO_FAILURE: "PLACEINFO_FAILURE",
  PLACE_TRAVELLOUGE_SUCCESS: "PLACE_TRAVELLOUGE_SUCCESS",
  PLACE_TRAVELLOUGE_FAILURE: "PLACE_TRAVELLOUGE_FAILURE",
  PLACE_ID: "PLACE_ID"
};
export const place_success = data => {
  let slides = [data.image1, data.image2, data.image3];
  return {
    type: place_action_types.PLACEINFO_SUCCESS,
    data: data,
    slides: slides
  };
};

export const place_failure = () => {
  return {
    type: place_action_types.PLACEINFO_FAILURE
  };
};

export const place_id = id => {
  return {
    type: place_action_types.PLACE_ID,
    id: id
  };
};

export const place_travellouges_success = data => {
  return {
    type: place_action_types.PLACE_TRAVELLOUGE_SUCCESS,
    data: data
  };
};

export const place_travellouges_failure = () => {
  return {
    type: place_action_types.PLACE_TRAVELLOUGE_FAILURE
  };
};
export const place = id => {
  // type: "place"
  console.log("place");
  return async function(dispatch) {
    dispatch(place_id(id));
    let response = await place_api.place();
    if (response == false) {
      console.log("there was an error with userProfile");
      dispatch(place_failure());
      console.log("after reducer userProfile");
    } else {
      console.log("in place action,response is", response);
      dispatch(place_success(response[0]));
    }

    response = await place_api.palce_travellouges();
    if (response == false) {
      console.log("there was an error with place travellouges");
      dispatch(place_travellouges_failure());
      console.log("after reducer place travellouges");
    } else {
      console.log("in place travellouges action,response is", response);
      dispatch(place_travellouges_success(response));
    }
  };
};
