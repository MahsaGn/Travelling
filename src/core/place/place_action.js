import place_api from "../api/place_api";

export const place_action_types = {
    PLACEINFO_SUCCESS: 'PLACEINFO_SUCCESS',
    PLACE_ID_WRONG: 'PLACE_ID_WRONG',
    PLACEINFO_FAILURE: 'PLACEINFO_FAILURE',
    PLACE_TRAVELLOUGE_SUCCESS: 'PLACE_TRAVELLOUGE_SUCCESS',
    PLACE_TRAVELLOUGE_FAILURE: 'PLACE_TRAVELLOUGE_FAILURE',
    PLACE_ID: 'PLACE_ID'
}
export function place_success(data) {
    let slides = [data.image1, data.image2, data.image3]
    return {
        type: place_action_types.PLACEINFO_SUCCESS,
        data: data,
        slides: slides
    }
}

export function place_failure() {
    return {
        type: place_action_types.PLACEINFO_FAILURE
    }
}

export function place_id(id) {
    try {
        let placeid = Number(id)
        console.log("is number", typeof placeid == 'number', "is + ", placeid >= 0, "is int", Number.isInteger(placeid))
        if (typeof placeid == 'number' && placeid >= 0 && Number.isInteger(placeid) && id!="") {
            return {
                type: place_action_types.PLACE_ID,
                id: placeid
            }
        }
        return {
            type: place_action_types.PLACE_ID_WRONG
        }
    }
    catch{
        return {
            type: place_action_types.PLACE_ID_WRONG
        }
    }
}

export function place_travellouges_success(data) {
    if (data.travellouges == undefined || data.travellouges.length == 0) {
        return {
            type: place_action_types.PLACE_TRAVELLOUGE_FAILURE
        }
    }
    return {
        type: place_action_types.PLACE_TRAVELLOUGE_SUCCESS,
        data: data
    }
}

export function place_travellouges_failure() {
    return {
        type: place_action_types.PLACE_TRAVELLOUGE_FAILURE
    }
}
export function place(id) {
    // type: "place"
    console.log("place", id)
    return async function (dispatch) {
        dispatch(place_id(id))
        let response = await place_api.place()
        if (response == false) {
            console.log('there was an error with userProfile')
            dispatch(place_failure())
            console.log("after reducer userProfile")
        } else {
            console.log("in place action,response is", response)
            dispatch(place_success(response[0]))
        }

        response = await place_api.palce_travellouges()
        if (response == false) {
            console.log('there was an error with place travellouges')
            dispatch(place_travellouges_failure())
            console.log("after reducer place travellouges")
        } else {
            console.log("in place travellouges action,response is", response)
            dispatch(place_travellouges_success(response))
        }


    }
}