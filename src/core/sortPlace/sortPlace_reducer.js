
const initialState = {
    sortedPlaceLoaded : false,
    places_info:"",
    sortPlace_option:"",
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
        case "CHANGE_ACTIVETAB":
            return{
                ...state,
                sortPlace_option:action.option,
                activeTab:action.activeTab
            }
            
        default:
            return state
    }
}