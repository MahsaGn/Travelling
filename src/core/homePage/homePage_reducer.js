const initialState = {
    homePlace_info : [],
    homePlaceLoaded:false
}
export const homePage_reducer=(state=initialState,action)=>{
    console.log("in homepage reducer",action);
    switch(action.type){
        case "LOADPLACEHOME_SUCCESS":
            return {
                ...state,
                homePlaceLoaded:true,
                homePlace_info:action.data
            }
        case "LOADPLACEHOME_FAILURE":
            return {
                ...state,
                homePlaceLoaded:false
            }
        default:
            return state
    }
}