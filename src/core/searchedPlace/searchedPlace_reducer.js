
const initialState = {
    searchedPlaceLoaded : false,
    places_info:"",
    searchedPlace_val:"",
    sortPlace_option:"",
    activeTab:1
}

export const searchedPlace_reducer = (state = initialState , action) => {
    console.log("in searchedplace reducer",action)
    switch(action.type){
        case "SEARCHEDPLACE_SUCCESS":
            return {
                ...state,
                searchedPlaceLoaded:true,
                places_info:action.data
            }
        case "SEARCHEDPLACE_FAILURE" :
            return {
                ...state,
                searchedPlaceLoaded:false
            }
        case "SEARCHEDPLACE_VAL":
            return {
                ...state,
                searchedPlace_val:action.val,
            }
        case "CHANGE_SORTVAL":
                return {
                    ...state,
                    activeTab:action.activeTab,
                    sortPlace_option:action.option
                }
        default:
            return state
    }
}