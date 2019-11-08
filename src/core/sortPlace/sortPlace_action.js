import sortPlace_api from "../api/sortPlace_api";
export const sortPlace_action_types = {
    SORTPLACE_SUCCESS: 'SORTPLACE_SUCCESS',
    SORTPLACE_FAILURE: 'SORTPLACE_FAILURE',
    CHANGE_ACTIVETAB:'CHANGE_ACTIVETAB'
}
export const sortPlace_success = (data) => {
    return {
        type: sortPlace_action_types.SORTPLACE_SUCCESS,
        data: data
    }
}  

export const sortPlace_failure = () => {
    return {
        type: sortPlace_action_types.SORTPLACE_FAILURE
    }
}                                                  

export const change_activeTab = (activeTab,option) =>{
    console.log(option)
    return{
        type: sortPlace_action_types.CHANGE_ACTIVETAB,
        activeTab:activeTab,
        option:option
    }
}

export const sortPlace =(activeTab,option) => {
    // type: "sortPlace"
    console.log("sortPlace")
    return async function (dispatch) {
        await sortPlace_api.sortPlace()
        dispatch(change_activeTab(activeTab,option))
        let response = await sortPlace_api.sortPlace()
        if(response==false){
            console.log('there was an error with sortP')
            dispatch(sortPlace_failure())
            console.log("after reducer sortP")
        }else
        {
            console.log("in sortPlace action,response is",response)
            dispatch(sortPlace_success(response))
        }
     
            
    }
}