
const initialState = {
    allPlace_info:"",
    allPlaceLoaded:false
}

export const allPlaces_reducer = (state = initialState , action) => {
    console.log("in allPlace reducer",action)
    switch(action.type){
        case "FETCHALLPLACE_SUCCESS":
            return {
                ...state,
                allPlaceLoaded:true,
                allPlace_info:action.data
            }
        case "FETCHALLPLACE_FAILURE" :
            return {
                ...state,
                allPlaceLoaded:false
            }
        default:
            return state
    }
}