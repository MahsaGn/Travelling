
const initialState = {
    isLeader : false
}

export const beacomeLeader_reducer = (state = initialState , action) => {
    console.log("in beacomeLeader reducer",action)
    switch(action.type){
        case "BECOMELEADER_SUCCESS":
            return {
                isLeader:true
            }
        case "BECOMELEADER_FAILURE":
            return {
                isLeader:false
            }
        default:
            return state
    }
}