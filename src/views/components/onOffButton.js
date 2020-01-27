import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/profile.css";
import Switch from '@material-ui/core/Switch';
import { connect } from "react-redux";
import * as userProfileAction from "../../core/userProfile/userProfile_action";




class onOffButton extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange() {
    let value = this.state.checked;
    await this.props.change_stateLeader()
    if (this.props.isChanged == true)
      this.setState({ checked: !value });
  }

  render() {
    console.log(this.state.checked)
    return (
      <div>
        <label>
          <br />
          <Switch color="primary" checked={this.state.checked} onChange={this.handleChange} value="gilad" />
        </label>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isChanged: state.userProfile_reducer.isChanged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    change_stateLeader: () =>
      dispatch(userProfileAction.changeAvailability())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(onOffButton);