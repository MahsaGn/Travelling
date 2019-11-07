
const initialState = {
    placeLoaded : false,
    leadersLeaded:false,
    place_info:"",
    leaders_info:"",
    place_id:"",
    slide_info:""
}

export const place_reducer = (state = initialState , action) => {
    console.log("in place reducer",action)
    switch(action.type){
        case "PLACEINFO_SUCCESS":
            return {
                ...state,
                placeLoaded:true,
                place_info:action.data,
                slide_info:action.slides
            }
        case "PLACEINFO_FAILURE" :
            return {
                ...state,
                placeLoaded:false
            }
        case "PLACE_ID":
            return {
                ...state,
                place_id:action.id
            }
        case "PLACE_SLIDES":
            return{
                ...state,
                slide_info:action.slides
            }
        default:
            return state
    }
}