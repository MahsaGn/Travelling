
const initialState = {
    placeLoaded: false,
    placeTravellougeLoaded: false,
    leadersLeaded: false,
    place_info: "",
    leaders_info: "",
    place_id: "",
    wrongPlaceid: true,
    slide_info: "",
    placeTravellouges: ""
}

export const place_reducer = (state = initialState, action) => {
    console.log("in place reducer", action)
    switch (action.type) {
        case "PLACEINFO_SUCCESS":
            return {
                ...state,
                placeLoaded: true,
                place_info: action.data,
                slide_info: action.slides
            }
        case "PLACEINFO_FAILURE":
            return {
                ...state,
                placeLoaded: false
            }
        case "PLACE_ID_WRONG":
            return {
                ...state,
                wrongPlaceid: true
            }

        case "PLACE_TRAVELLOUGE_SUCCESS":
            console.log("travellouges infos in reducer", action.data)
            return {
                ...state,
                placeTravellouges: action.data,
                placeTravellougeLoaded: true
            }
        case "PLACE_TRAVELLOUGE_FAILURE":
            return {
                ...state,
                placeTravellougeLoaded: false
            }
        case "PLACE_ID":
            return {
                ...state,
                wrongPlaceid:false,
                place_id: action.id
            }
        case "PLACE_SLIDES":
            return {
                ...state,
                slide_info: action.slides
            }
        default:
            return state
    }
}