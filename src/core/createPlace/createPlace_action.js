import CreatePlace_api from "../api/createPlace_api";

export const createPlace_action_types = {
    CREATEPLACE_SUCCESS: 'CREATEPLACE_SUCCESS',
    CREATEPLACE_FAILUR: 'CREATEPLACE_FAILUR'
}
export const createPlace_failure = () => {
    return {
        type: createPlace_action_types.CREATEPLACE_FAILUR
    }
}                                                  

export const createPlace_success = () => {
    return {
        type: createPlace_action_types.CREATEPLACE_SUCCESS
    }
}

export const createPlace = (place_info) => {
    // type: "login"
    console.log("place_info",place_info)
    return  function (dispatch) {
        let response =  CreatePlace_api.createPlace(place_info)
            if(response==false){
                console.log('there was an error with createPlace')
                dispatch(createPlace_failure())
                console.log("after reducer")
            }else
            {
                console.log("befoe dispatch success createPalce")
                dispatch(createPlace_success())
            }
     
            
    }
}