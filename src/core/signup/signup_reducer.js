const initialState = {
    signed_up:false
}

export const signup_reducer = (state = initialState , action) => {
    console.log("in signup reducer",action.type)
    switch(action.type){
        case "SIGNUP_SUCCESS":
            return  {
                signed_up:true
            }
        case "SIGNUP_FAILUR" :
            return {
                signed_up:false
            }
        default:
            return state
    }
}