
const initialState = {
    place_info:"",
    placeLoaded:false
}

export const addPlaceForLeader_reducer = (state = initialState , action) => {
    console.log("in addPlaceForLeader reducer",action)
    switch(action.type){
        case "َFETCHALLPLACE_SUCCESS":
            return {
                ...state,
                placeLoaded:true,
                place_info:action.data
            }
        case "FETCHALLPLACE_FAILURE" :
            return {
                ...state,
                placeLoaded:false
            }
        default:
            return state
    }
}