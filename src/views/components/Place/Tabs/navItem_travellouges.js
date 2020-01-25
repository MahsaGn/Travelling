import React from 'react'
import TravellougeCard from '../../travelougeCard'
import { connect } from 'react-redux'


class NavItem_travelloue extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let travellouges = <p>هیچ سفرنامه ای تا کنون ثبت نشده سات.</p>
    if (this.props.has_travelogue) {
      travellouges = this.props.travellouge_info.map(x => <TravellougeCard info={x} />)
      return (
        <div>
          {travellouges}
        </div>
      );
    }
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    travellouge_info: state.place_reducer.placeTravellouges.travellouges,
    has_travelogue: state.place_reducer.placeTravellougeLoaded
  }
}
export default connect(mapStateToProps)(NavItem_travelloue);