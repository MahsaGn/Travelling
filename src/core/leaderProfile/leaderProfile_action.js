import leaderProfile_api from "../api/leaderProfile_api";

export const leaderProfile_action_types = {
    GETPROFILE_SUCCESS: 'GETPROFILE_SUCCESS',
    ISLEADER_SUCCESS: 'ISLEADER_SUCCESS',
    GETPROFILE_FAILURE: 'GETPROFILE_FAILURE'
}
export const leaderProfile_success = (data) => {
    console.log("loginSuccess")
    return {
        type: leaderProfile_action_types.GETPROFILE_SUCCESS,
        data: data
    }
}  

export const leaderProfile_failure = () => {
    return {
        type: leaderProfile_action_types.GETPROFILE_FAILURE
    }
}                                                  


export const leaderProfile = () => {
    // type: "leader"
    console.log("leaderProfile_info")
    return async function (dispatch) {
        let response = await leaderProfile_api.leaderProfile()
            if(response==false){
                console.log('there was an error with userProfile')
                dispatch(leaderProfile_failure())
                console.log("after reducer leaderProfile")
            }else
            {
                console.log("in leader profile action,response is",response)
                dispatch(leaderProfile_success(response))
            }
     
            
    }
}