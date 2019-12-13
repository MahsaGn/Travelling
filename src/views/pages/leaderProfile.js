import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { ListGroup } from "reactstrap";
import Profile_item from "../components/profile_item";
import "../styles/profile.css";
import * as leaderProfileAction from "../../core/leaderProfile/leaderProfile_action";

class leaderProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentWillMount() {
    console.log("in handel submit");
    await this.props.leaderProfile();
    var idleader = window.location.pathname.split("/")[2];
    console.log("id leader aaaaaa", idleader);
    await this.props.leaderProfile(idleader);
  }

  render() {
    return (
      <dev id="profilePage">
        <img
          className={
            this.props.data.is_available
              ? "leaderProfileOnline"
              : "leaderProfileOffline"
          }
          src={this.props.data.avatar}
        />

        <br />
        <h1 id="h1">{this.props.data.username}</h1>
        <ListGroup id="items">
          <Profile_item title="نام" val={this.props.data.first_name} />
          <Profile_item title="نام خانوادگی" val={this.props.data.last_name} />
          <Profile_item title="درباره من" val={this.props.data.itinerary} />
          <Profile_item title="سن" val={this.props.data.age} />
          <Profile_item title="ایمیل" val={this.props.data.email} />
          <Profile_item
            title="جنسیت"
            val={this.props.data.gender ? "اقا" : "خانم"}
          />
          <Profile_item
            title="اتومبیل"
            val={this.props.data.has_car ? "بله" : "خیر"}
          />

          <Profile_item
            title="ظرفیت ماشین"
            val={this.props.data.car_capacity}
          />
          <Profile_item title="مدل ماشین" val={this.props.data.car_model} />
          <Profile_item
            title="انلاین"
            val={this.props.data.is_available ? "بله" : "خیر"}
          />
        </ListGroup>
      </dev>
    );
  }
}
const mapStateToProps = state => {
  return {
    has_profileInfo: state.leaderProfile_reducer.has_profileInfo,
    data: state.leaderProfile_reducer.profile_info
  };
};

const mapDispatchToProps = dispatch => {
  return {
    leaderProfile: profile_info =>
      dispatch(leaderProfileAction.leaderProfile(profile_info))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(leaderProfile);
