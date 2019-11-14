
const initialState = {
    choosedPlaces : [],
    isTraveloguAdded=false,

}

export const addTravelogu_reducer = (state = initialState , action) => {
    console.log("in addTravelogu reducer",action)
    switch(action.type){
        case "ADDTRAVELOGU_SUCCESS":
            return {
                isTraveloguAdded:true
            }
        case "ADDTRAVELOGU_FAILURE":
            return {
                isTraveloguAdded:false
            }
        case "TRAVELOGU_CHOOSEDPLACES":
            return{
                choosedPlaces:action.choosedPlaces
            }
        default:
            return state
    }
}