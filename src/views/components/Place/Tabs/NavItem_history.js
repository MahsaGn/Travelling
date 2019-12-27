import React from 'react'
import { connect } from 'react-redux'


class History extends React.Component {

  render() {
    return (
      <div id="nav_item_history">
        {this.props.info}
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    info: state.place_reducer.place_info.Description
  }
}
export default connect(mapStateToProps)(History)
