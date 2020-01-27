const initialState = {
    placeLoaded: false,
    placeTravellougeLoaded: false,
    leadersLeaded: false,
    place_info: "",
    leaders_info: [],
    place_id: "",
    wrongPlaceid: true,
    slide_info: [],
    placeTravellouges: []
}

export function place_reducer(state = initialState, action) {
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
                placeLoaded: false,
                placeTravellougeLoaded: false,
                leadersLeaded: false,
                place_info: "",
                leaders_info: [],
                slide_info: [],
                placeTravellouges: []

            }
        case "PLACE_ID_WRONG":
            return {
                ...state,
                placeLoaded: false,
                placeTravellougeLoaded: false,
                leadersLeaded: false,
                place_info: "",
                leaders_info: [],
                wrongPlaceid: true,
                slide_info: [],
                placeTravellouges: []
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
                placeTravellougeLoaded: false,
                placeTravellouges: []
            }
        case "PLACE_ID":
            return {
                ...state,
                placeLoaded: false,
                placeTravellougeLoaded: false,
                leadersLeaded: false,
                place_info: "",
                leaders_info: [],
                wrongPlaceid: false,
                slide_info: [],
                placeTravellouges: [],
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
