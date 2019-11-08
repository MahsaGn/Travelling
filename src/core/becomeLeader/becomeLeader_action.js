import becomeLeader_api from "../api/becomeLeader_api";
import { async } from "q";

export const beacomeLeader_action_types = {
    BECOMELEADER_SUCCESS: 'BECOMELEADER_SUCCESS',
    BECOMELEADER_FAILURE: 'BECOMELEADER_FAILURE'
}
export const beacomeLeader_success = (acc,ref) => {
    console.log("loginSuccess")
    return {
        type: beacomeLeader_action_types.BECOMELEADER_SUCCESS,
        access:acc,
        refresh:ref
    }
}  

export const beacomeLeader_failure = () => {
    return {
        type: beacomeLeader_action_types.BECOMELEADER_FAILURE
    }
}                                                  


export const beacomeLeader = (leader_info) => {
    // type: "login"
    console.log("leader_info",leader_info)
    return async function (dispatch) {
        let response = await becomeLeader_api.becomeLeader(leader_info)
            if(response==false){
                console.log('there was an error with beacomeLeader')
                dispatch(beacomeLeader_failure())
                console.log("after reducer")
            }else
            {
                console.log("befoe dispatch success beacomeLeader")
                dispatch(beacomeLeader_success())
            }
     
            
    }
}
