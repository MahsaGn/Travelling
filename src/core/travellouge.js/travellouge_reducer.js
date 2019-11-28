
const initialState = {
    travellouge_info:"",
    travelouge_id:"",
    ifTravellouge:false
}

export const place_reducer = (state = initialState , action) => {
    console.log("in place reducer",action)
    switch(action.type){
        case "TRAVELLOUGEINFO_SUCCESS":
            return {
                ...state,
                ifTravellouge:true,
                travellouge_info:action.data
            }
        case "TRAVELLOUGEINFO_FAILURE" :
            return {
                ...state,
                ifTravellouge:false
            }
        case "TRAVELLOUGE_ID":
            return {
                ...state,
                travelouge_id:action.id
            }
        default:
            return state
    }
}