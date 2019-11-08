
const initialState = {
    sortedPlaceLoaded : false,
    places_info:"",
    searchedPlace_option:"",
    activeTab:1
}

export const sortPlace_reducer = (state = initialState , action) => {
    console.log("in sortplace reducer",action)
    switch(action.type){
        case "SORTPLACE_SUCCESS":
            return {
                ...state,
                sortedPlaceLoaded:true,
                places_info:action.data
            }
        case "SORTPLACE_FAILURE" :
            return {
                ...state,
                sortedPlaceLoaded:false
            }
        case "SORTPLACE_OPTION":
            return {
                ...state,
                searchedPlace_option:action.option
            }
        case "CHANGE_ACTIVETAB":
            return{
                ...state,
                activeTab:action.activeTab
            }
            
        default:
            return state
    }
}