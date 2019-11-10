
const initialState = {
    allPlace_info:"",
    allPlaceLoaded:false,
    placeAddedForLeader:false,
    choosedPlace:""
}

export const addPlaceForLeader_reducer = (state = initialState , action) => {
    console.log("in addPlaceForLeader reducer",action)
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
        case "ADD_PLACEFORLEADER_SUCCESS":
            return{
                ...state,
                placeAddedForLeader:true
            }
        case "ADD_PLACEFORLEADER_FAILURE":
            return{
                ...state,
                placeAddedForLeader:false
            }
        case "CHOOSED_PLACE":
            return{
                ...state,
                choosedPlace:action.choosedPlace
            }
        default:
            return state
    }
}