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
    console.log("leader data is:", this.props.data);
    
  }

  render() {
    return (
      <dev id="profilePage">
        <img id="profileImage" src={this.props.image} />
        <br />
        <h1 id="h1">{this.props.username}</h1>
        <ListGroup id="items">
          <Profile_item title="نام" val={this.props.data.firstname} />
          <Profile_item title="نام خانوادگی" val={this.props.data.lastname} />
          <Profile_item title="سفرنامه" val={this.props.data.itinerary} />
          <Profile_item
            title="اتومبیل"
            val={this.props.data.has_car ? "بله" : "خیر"}
          />
          ,
          <Profile_item
            title="ظرفیت ماشین"
            val={this.props.data.car_capacity}
          />
          ,
          <Profile_item title="مدل ماشین" val={this.props.data.car_model} />
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
