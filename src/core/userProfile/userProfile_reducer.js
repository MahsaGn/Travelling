
const initialState = {
    is_leader : false,
    has_profileInfo:false,
    profile_info:""
}

export const userProfile_reducer = (state = initialState , action) => {
    console.log("in userProfile reducer",action)
    switch(action.type){
        case "GETPROFILE_SUCCESS":
            return {
                ...state,
                has_profileInfo:true,
                profile_info:action.data
            }
        case "ISLEADER_SUCCESS" :
            return {
                ...state,
                is_leader:true
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