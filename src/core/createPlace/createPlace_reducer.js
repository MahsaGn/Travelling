import { stat } from "fs"

const initialState = {
    isCreated:false
}

export const createPlace_reducer = (state = initialState , action) => {
    console.log("in createplace reducer",action)
    switch(action.type){
        case "CREATEPLACE_FAILUR":
            return {
                ...state,
                isCreated:false
            }
        case "CREATEPLACE_SUCCESS" :
            return {
                ...state,
                isCreated:true
            }
        default:
            return state
    }
}