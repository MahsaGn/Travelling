import allPlace_api from "../api/allPlace_api";
import addPlaceForLeader_api from "../api/addPlaceForLeader_api";

export const addPlaceForLeader_action_types = {
    ADD_PLACEFORLEADER_SUCCESS: 'ADD_PLACEFORLEADER_SUCCESS',
    ADD_PLACEFORLEADER_FAILURE:'ADD_PLACEFORLEADER_FAILURE',
    CHOOSED_PLACE: 'CHOOSED_PLACE'
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
    console.log("choosed place",choosedPlace)
    return async function (dispatch) {
        dispatch(set_choosedPlace(choosedPlace))
        let response = await addPlaceForLeader_api.addPlaceForLeader()
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

