import addTravelogu_api from '../api/addTravelogu_api'
export const addTravelouge_action_types = {
    ADDTRAVELOGU_SUCCESS: 'ADDTRAVELOGU_SUCCESS',
    ADDTRAVELOGU_FAILURE:'ADDTRAVELOGU_FAILURE',
    TRAVELOGU_INFO: 'TRAVELOGU_INFO'
}
 
export const addTravelouge_success = () => {
    return {
        type: addTravelouge_action_types.ADDTRAVELOGU_SUCCESS,
    }
}  

export const addTravelouge_failure = () => {
    return {
        type: addTravelouge_action_types.ADDTRAVELOGU_FAILURE
    }
} 
export const addTravelouge_info=(info) => {
    return{
        type:addTravelouge_action_types.TRAVELOGU_INFO,
        data:info
    }
} 
export const addTravelogu = (travelouge_info) => {
    // type: "place"
    console.log("in add travelogu")
    return async function (dispatch) {
         dispatch(addTravelouge_info(travelouge_info))
        let response = await addTravelogu_api.addTravelogu()
        if(response==false){
            console.log('there was an error with add travelogu')
            dispatch(addTravelouge_failure())
            console.log("after reducer add travelogu ")
        }else
        {
            console.log("in add travelogu action,response is")
            dispatch(addTravelouge_success())
        }
     
            
    }
}