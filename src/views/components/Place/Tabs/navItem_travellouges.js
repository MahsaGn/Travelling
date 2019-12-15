import React from 'react'
import TravellougeCard from '../../travelougeCard'
import {connect} from 'react-redux'
class NavItem_travelloue extends React.Component{
    constructor(props){
        super(props)
    }
  render(){
    let travellouges = <p>هیچ سفرنامه ای تا کنون ثبت نشده سات.</p>
    if(this.props.travellouge_info!=undefined)
        travellouges = this.props.travellouge_info.map(x=><TravellougeCard info={x}/>)
    return(
        <div>
        {travellouges}
        </div>
    );}
}
const mapStateToProps = (state) => {
  return{
    travellouge_info :state.place_reducer.placeTravellouges.travellouges
  }
}
export default connect(mapStateToProps)(NavItem_travelloue);