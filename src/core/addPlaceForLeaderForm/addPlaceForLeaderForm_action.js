import allPlace_api from "../api/allPlace_api";
import { Children } from "react";

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

export const addPlaceForLeader_success =()=>{
    return{
        type: addPlaceForLeader_action_types.ADD_PLACEFORLEADER_SUCCESS,
        placeAddedForLeader:true
    }
}

export const addPlaceForLeader_failure =()=>{
    return{
        type: addPlaceForLeader_action_types.ADD_PLACEFORLEADER_FAILURE,
        placeAddedForLeader:false
    }
}

export const set_choosedPlace =(choosedPlace)=>{
    return{
        type: addPlaceForLeader_action_types.CHOOSED_PLACE,
        choosedPlace:choosedPlace
    }
}
export const addPlaceForLeader = (choosedPlace) => {
    // type: "place"
    console.log("choosed place")
    return async function (dispatch) {
        dispatch(set_choosedPlace(choosedPlace))
        let response = await allPlace_api.addPlaceForLeader()
        if(response==false){
            console.log('there was an error with add place fpr leader')
            dispatch(addPlaceForLeader_failure())
            console.log("after reducer add place for leader")
        }else
        {
            console.log("in place action,response is",response)
            dispatch(addPlaceForLeader_success(response))
        }
    }
}

export const allPlace = () => {
    // type: "place"
    console.log(" allplace")
    return async function (dispatch) {
        let response = await allPlace_api.allPlace()
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