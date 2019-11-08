const initialState = {
    logedin : false
}
const homePage_reducer=(state=initialState,action)=>{
    console.log("in homepage reducer",action);
    switch(action.type){
        case "LOGEDIN_SUCCESS":
            return {
                logedin:true
            }
        case "LOGEDIN_FAILURE":
            return {
                logedin:false
            }
        default:
            return state
    }
}