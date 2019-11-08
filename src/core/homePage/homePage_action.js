import homePage_api from "../api/homePage_api";

export const homePage_action_types = {
    LOADPLACEHOME_SUCCESS: 'LOADPLACEHOME_SUCCESS',
    LOADPLACEHOME_FAILURE: 'LOADPLACEHOME_FAILURE',
}
export const homePage_success = (data) => {
    return {
        type: homePage_action_types.LOADPLACEHOME_SUCCESS,
        data: data
    }
}  

export const homePage_failure = () => {
    return {
        type: homePage_action_types.LOADPLACEHOME_FAILURE
    }
}                                                  


export const homePage = (id) => {
    // type: "homePage"
    console.log("homePage")
    return async function (dispatch) {
        let response = await homePage_api.homePage()
        if(response==false){
            console.log('there was an error with homePage')
            dispatch(homePage_failure())
            console.log("after reducer homePage")
        }else
        {
            console.log("in homePage action,response is",response)
            dispatch(homePage_success(response))
        }
     
            
    }
}