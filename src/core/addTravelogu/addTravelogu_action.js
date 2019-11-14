import allPLace_api from '../api/allPlace_api'
export const addPlaceForLeader_action_types = {
    FETCHALLPLACE_SUCCESS: 'FETCHALLPLACE_SUCCESS',
    FETCHALLPLACE_FAILURE: 'FETCHALLPLACE_FAILURE',
    ADD_PLACEFORLEADER_SUCCESS: 'ADD_PLACEFORLEADER_SUCCESS',
    ADD_PLACEFORLEADER_FAILURE:'ADD_PLACEFORLEADER_FAILURE',
    CHOOSED_PLACE: 'CHOOSED_PLACE'
}
 
export const allPlace_success = (data) => {
    return {
        type: addPlaceForLeader_action_types.FETCHALLPLACE_SUCCESS,
        data: data
    }
}  

export const allPlace_failure = () => {
    return {
        type: addPlaceForLeader_action_types.FETCHALLPLACE_FAILURE
    }
}  
export const addTravelogu = () => {
    // type: "place"
    console.log(" allplace")
    return async function (dispatch) {
        let response = await allPLace_api.allPlace()
        if(response==false){
            console.log('there was an error withall place')
            dispatch(allPlace_failure())
            console.log("after reducer allplace ")
        }else
        {
            console.log("in allplace action,response is",response)
            dispatch(allPlace_success(response))
        }
     
            
    }
}