
const initialState = {
    has_profileInfo:false,
    profile_info:""
}

export const leaderProfile_reducer = (state = initialState , action) => {
    console.log("inleaderProfile reducer",action)

    switch(action.type){
        case "GETPROFILE_SUCCESS":
            return {
                ...state,
                has_profileInfo:true,
                profile_info:action.data[0]
            }
        case "GETPROFILE_FAILURE":
            return {
                ...state,
                has_profileInfo:false
            }
        default:
            return state
    }
}