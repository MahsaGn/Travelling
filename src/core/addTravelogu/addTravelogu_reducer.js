
const initialState = {
    isTraveloguAdded:false,
    travelog_info:""
}

export const addTravelogu_reducer = (state = initialState , action) => {
    console.log("in addTravelogu reducer",action)
    switch(action.type){
        case "ADDTRAVELOGU_SUCCESS":
            return {
                ...state,
                isTraveloguAdded:true
            }
        case "ADDTRAVELOGU_FAILURE":
            return {
                ...state,
                isTraveloguAdded:false
            }
        case "TRAVELOGU_INFO":
            return{
                ...state,
                travelog_info:action.data
            }
        default:
            return state
    }
}