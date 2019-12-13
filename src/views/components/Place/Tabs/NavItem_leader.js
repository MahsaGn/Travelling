import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../../styles/style.css";
import Axios from "axios";
import LeaderCard from "./leaderCard";
import { connect } from "react-redux";

class NavItem_leader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let leader = <p>هیچ لیدری تا کنون ثبت نشده است.</p>;
    if (this.props.leader_info != undefined)
      leader = this.props.leader_info.map(x => <LeaderCard info={x} />);
    console.log("in nav item leader");
    console.log("leader info ", leader);
    console.log("leader_info ", this.props.profile_info);

    return <div>{leader}</div>;
  }
}
export default NavItem_leader;
