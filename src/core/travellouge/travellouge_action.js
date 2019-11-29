import travellouge_api from "../api/travellouge_api";

export const travellouge_action_types = {
    TRAVELLOUGEINFO_SUCCESS: 'TRAVELLOUGEINFO_SUCCESS',
    TRAVELLOUGEINFO_FAILURE: 'TRAVELLOUGEINFO_FAILURE',
    TRAVELLOUGE_ID: 'TRAVELLOUGE_ID'
}
export const travellouge_success = (data) => {
    let slides = [data.image1,data.image2,data.image3]
    return {
        type: travellouge_action_types.TRAVELLOUGEINFO_SUCCESS,
        data: data,
        slides:slides
    }
}  

export const travellouge_failure = () => {
    return {
        type: travellouge_action_types.TRAVELLOUGEINFO_FAILURE
    }
}                                                  

export const travellouge_id = (id) => {
    return {
        type: travellouge_action_types.TRAVELLOUGE_ID,
        id:id
    }
} 

export const travellouge = (id) => {
    // type: "travellouge"
    console.log("in travellouge action ",id)
    return async function (dispatch) {
        dispatch(travellouge_id(id))
        let response = await travellouge_api.travellouge()
        if(response==false){
            console.log('there was an error with travellouge')
            dispatch(travellouge_failure())
            console.log("after reducer travellouge")
        }else
        {
            console.log("in travellouge action,response is",response)
            dispatch(travellouge_success(response))
        }
     
            
    }
}