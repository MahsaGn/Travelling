import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../../../styles/style.css';
import LeaderCard from '../../leaderCard'
import { connect } from 'react-redux'


class NavItem_leader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let loadedLeaders = <p>هیچ راهنمایی ای تا کنون ثبت نشده سات.</p>
    if (this.props.has_travelogue) {
      loadedLeaders = this.props.travellouge_info.map(x => <LeaderCard info={x} />)
    }
    return (
      <div>
        {loadedLeaders}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    travellouge_info: state.place_reducer.placeTravellouges.travellouges,
    has_travelogue: state.place_reducer.placeTravellougeLoaded
  }
}
export default connect(mapStateToProps)(NavItem_leader);