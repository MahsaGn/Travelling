import React from 'react'
import api from '../../core/api/allPlace_api'
class addPlaceForLeader extends React.Component{
    async componentWillMount(){
        let res = await api.allPlace()
        console.log(res)
        let res2 = await api.addPlaceForLeader()
        console.log(res2)
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}
export default addPlaceForLeader