import searchedPlace_api from "../api/searchedPlace_api";
export const searchedPlace_action_types = {
    SEARCHEDPLACE_SUCCESS: 'SEARCHEDPLACE_SUCCESS',
    SEARCHEDPLACE_FAILURE: 'SEARCHEDPLACE_FAILURE',
    SEARCHEDPLACE_VAL: 'SEARCHEDPLACE_VAL'
}
export const searchedPlace_success = (data) => {
    return {
        type: searchedPlace_action_types.SEARCHEDPLACE_SUCCESS,
        data: data
    }
}  

export const searchedPlace_failure = () => {
    return {
        type: searchedPlace_action_types.SEARCHEDPLACE_FAILURE
    }
}                                                  

export const searchedPlace_val = (val) => {
    return {
        type: searchedPlace_action_types.SEARCHEDPLACE_VAL,
        val:val
    }
} 

export const searchedPlace = (val) => {
    // type: "searchedPlace"
    console.log("searchedPlace")
    return async function (dispatch) {
        dispatch(searchedPlace_val(val))
        let response = await searchedPlace_api.searchedPlace()
        if(response==false){
            console.log('there was an error with searchedP')
            dispatch(searchedPlace_failure())
            console.log("after reducer searchedP")
        }else
        {
            console.log("in searchedPlace action,response is",response)
            dispatch(searchedPlace_success(response))
        }
     
            
    }
}