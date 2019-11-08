import place_api from "../api/place_api";

export const addPlaceForLeader_action_types = {
    FETCHALLPLACE_SUCCESS: 'FETCHALLPLACE_SUCCESS',
    FETCHALLPLACE_FAILURE: 'FETCHALLPLACE_FAILURE',
    PLACE_ID: 'PLACE_ID'
}
export const place_success = (data) => {
    let slides = [data.image1,data.image2,data.image3]
    return {
        type: addPlaceForLeader_action_types.PLACEINFO_SUCCESS,
        data: data,
        slides:slides
    }
}  

export const place_failure = () => {
    return {
        type: addPlaceForLeader_action_types.PLACEINFO_FAILURE
    }
}                                                  

export const addPlaceForLeader_action_types = (id) => {
    // type: "place"
    console.log("place")
    return async function (dispatch) {
        dispatch(place_id(id))
        let response = await allplace_api.place()
        if(response==false){
            console.log('there was an error with userProfile')
            dispatch(place_failure())
            console.log("after reducer userProfile")
        }else
        {
            console.log("in place action,response is",response)
            dispatch(place_success(response[0]))
        }
     
            
    }
}