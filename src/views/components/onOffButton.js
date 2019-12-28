import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/profile.css";
import Switch from "react-switch";
export default class onOffButton extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    let value = this.props.mapStateToProps;
    if (value == true) {
      let notPrechecked = !this.state.checked;
      this.setState({ checked: notPrechecked });
      console.log("checkeddddd", checked);
    }
  }

  render() {
    return (
      <div>
        <label>
          <br />
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            className="onoffswitch"
          />
        </label>
        <p>
          you are now <span>{this.state.checked ? "on" : "off"}line</span>.
        </p>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isChanged: state.userProfile_reducer.isChanged
  };
};
