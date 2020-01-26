import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { ListGroup } from "reactstrap";
import PlaceCard from "../components/placeCard";
import Profile_item from "../components/profile_item";
import "../styles/style.css";
import TravelougeCard from "../components/travelougeCard";
import Header from "../components/header";
import * as userProfileAction from "../../core/userProfile/userProfile_action";
import OnOffButton from "../components/onOffButton";
import LeaderCalender from "../components/leaderCalender";

class userProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifIsLeader: null,
      places: [],
      mycalender: "",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC",
      travellouges: "",
      onoff: ""
    };
    this.setTravelouges = this.setTravelouges.bind(this);
  }

  async componentWillMount() {
    console.log("in handel submit");
    await this.props.userProfile();

    if (this.props.is_leader) {
      let calander = (
        <button onClick={() => window.location.replace("/mycalender")}>
          مشخص کردن زمان هایی که هستم
        </button>
      );
      let placess = "";
      if (this.props.data.place != "") {
        placess = this.props.data.place.map(d => (
          <PlaceCard
            title={d.title}
            src={d.image1}
            discriptions={d.categpries}
            id={d.id}
          />
        ));
      } else {
        placess = <p>هنوز هیچ مکانی ثبت نشده است</p>;
      }
      this.setState({
        ifIsLeader: [
          <Profile_item
            title="جنسیت"
            val={this.props.data.gender == false ? "آقا" : "خانم"}
          />,
          <Profile_item title="سن" val={this.props.data.age} />,
          <Profile_item
            title="اتومبیل"
            val={this.props.data.has_car ? "بله" : "خیر"}
          />,
          <Profile_item
            title="ظرفیت ماشین"
            val={this.props.data.car_capacity}
          />,
          <Profile_item title="مدل ماشین" val={this.props.data.car_model} />
        ],
        places: placess,
        mycalender: calander,
        onoff: this.props.data.is_available
      });
      console.log("onoff in userrrrrrrrrrr", this.state.onoff);
    }
  }

  setTravelouges() {
    let val
    if (this.props.data.travellouges != undefined && this.props.data.travellouges.length != 0) {
      console.log("--------travellouges", this.props.data.travellouges)
      val = this.props.data.travellouges.map(x => <TravelougeCard info={x} />)
    }
    else {
      console.log("no travelogue!!")
      val = <p>هیچ سفرنامه ای تا کنون ثبن نشده ست</p>
    }
    console.log("intravellouges", val)

    this.setState({ travellouges: val })

  }

  render() {
    return (
      <dev id="profilePage">
        <Header />
        <img id="profileImage" src={this.props.data.avatar ? this.props.data.avatar : this.state.image} />
        <br />
        <h1 id="h1">{this.props.data.username}</h1>
        <ListGroup id="items">
          <p>:تغییر وضعیت</p>
          <OnOffButton />
          <Profile_item title="نام" val={this.props.data.first_name} />
          <Profile_item title="نام خانوادگی" val={this.props.data.last_name} />
          <Profile_item title="سفرنامه" val={this.props.data.itinerary} />
          <Profile_item title="شماره تلفن" val={this.props.data.phone_number} />
          {this.state.ifIsLeader}
        </ListGroup>
        <br />
        <br />
        <br />
        {this.props.data.is_leader ? <h3 className="form_title">مکان هایی که لیدر آن هستید</h3> : null}
        <br />
        <div className="profile_places">
          {this.state.places}
        </div>
        <div className="profile_travelogue">
          <br />
          {this.props.data.travelouges != "" ? <h3 className="form_title">سفرنامه ها</h3> : null}
          {this.state.travellouges}
        </div>
      </dev>
    );
  }
}

const mapStateToProps = state => {
  return {
    is_leader: state.userProfile_reducer.is_leader,
    data: state.userProfile_reducer.profile_info
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userProfile: profile_info =>
      dispatch(userProfileAction.userProfile(profile_info))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(userProfile);
