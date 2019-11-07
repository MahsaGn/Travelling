import userProfile_api from "../api/userProfile_api";
import { stat } from "fs";

export const place_action_types = {
    PLACEINFO_SUCCESS: 'PLACEINFO_SUCCESS',
    PLACEINFO_FAILURE: 'PLACEINFO_FAILURE',
    PLACE_ID: 'PLACE_ID'
}
export const place_success = (data) => {
    console.log("loginSuccess")
    return {
        type: place_action_types.PLACEINFO_SUCCESS,
        data: data
    }
}  

export const place_failure = () => {
    return {
        type: place_action_types.PLACEINFO_FAILURE
    }
}                                                  

export const place_id = (id) => {
    return {
        type: place_action_types.PLACE_ID,
        id:id
    }
} 
export const place_slides=(img1,img2,img3)=>{
    return{
        type: place_action_types.PLACE_SLIDES,
        slides:[img1,img2,img3]
    }
} 
export const place = (id) => {
    // type: "place"
    console.log("place")
    return async function (dispatch) {
        dispatch(place_id(id))
        let response = await place_api.place()
            if(response==false){
                console.log('there was an error with userProfile')
                dispatch(palce_failure())
                console.log("after reducer userProfile")
            }else
            {
                console.log("in profile action,response is",response)
                dispatch(place_success(response))
                dispatch(place_slides(response[0].image1,response[0].image2,response[0].image3))
            }
     
            
    }
}