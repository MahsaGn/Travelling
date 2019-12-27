import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { ListGroup, Button } from "reactstrap";
import Profile_item from "../components/profile_item";
import TravelougeCard from "../components/travelougeCard";
import Header from "../components/header";
import "../styles/style.css";
import PlaceCard from "../components/placeCard";
import * as leaderProfileAction from "../../core/leaderProfile/leaderProfile_action";
import Rating from '@material-ui/lab/Rating';


class leaderProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC",
      travelouges: "",
      leaders_places: [],
      rateVal: 0
    };
    this.saveRate = this.saveRate.bind(this)
    this.chagneRateValue = this.chagneRateValue.bind(this)
    this.setTravelouges = this.setTravelouges.bind(this);
  }
  async componentWillMount() {
    var idleader = window.location.pathname.split("/")[2];
    console.log("in profile id leader ", idleader);
    await this.props.leaderProfile(idleader);
    let places = "";
    console.log(
      "in leader profile dataaaaa placeeeeeeee",
      this.props.data.place
    );
    if (this.props.data.place != undefined) {
      places = this.props.data.place.map(place => (
        <PlaceCard src={place.image1} title={place.title} id={place.id} />
      ));
    } else {
      places = <p>هنوز هيچ مکاني ثبت نشده است</p>;
    }

    this.setState({
      leaders_places: places
    });

    this.setTravelouges();
  }

  setTravelouges() {
    let val;
    if (this.props.data.travellouges != undefined) {
      console.log("in leader travellouges", this.props.data.travellouges);
      val = this.props.data.travellouges.map(x => <TravelougeCard info={x} />);
    } else {
      val = <p> هیچ سفرنامه ای تاکنون ثبت نشده است</p>;
    }
    console.log("in travellouges", val);

    this.setState({ travellouges: val });
  }

  chagneRateValue(e, value) {
    console.log(value)
    this.setState(
      {
        rateVal: value
      }
    )
  }

  async saveRate() {
    await this.props.saveRateLeader(this.state.rateVal)
    if (this.props.loggedin == false) {
      alert("برای رای دادن ابتدا وارد شوید")
      window.location.replace('/authentication')
    }
    else {
      if (this.props.rateSaved)
        alert("رای شما با موفقیت ثبت شد")
      else {
        alert("لطفا بعدا امتحان کنید")
      }
    }
  }

  render() {
    return (
      <dev id="profilePage">
        <Header />
        <img
          id="profileImage"
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
          <Profile_item
            title="امتیاز"
            val={
              <Rating name="size-small" className="leader_card_rating" disabled='true' value={2} size="small" />
            }
          />
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

        <br />
        <br />
        <br />
        <h3 className="form_title">مکان ها</h3>}
        <br />
        <div className="profile_places">
          {this.state.leaders_places}
        </div>
        <div className="profile_travelogue">
          <br />
          <h3 className="form_title">سفرنامه ها</h3>
          {this.state.travellouges}
        </div>
        <br />
        <div className="rate_leader">
          <p className="rate_leader_title">به این تور لیدر امتیاز دهید</p>
          <Rating name="large" className="rate_leader_stars" value={this.state.rateVal} onChange={this.chagneRateValue} size="large" />
          <Button className="rate_leader_button" onClick={this.saveRate}>ثبت رای</Button>
        </div>
      </dev>
    );
  }
}
const mapStateToProps = state => {
  return {
    has_profileInfo: state.leaderProfile_reducer.has_profileInfo,
    data: state.leaderProfile_reducer.profile_info,
    id: state.leaderProfile_reducer.leader_id,
    logged_in: state.login_reducer.logged_in,
    rateSaved : state.leaderProfile_reducer.isRateSaved
  };
};

const mapDispatchToProps = dispatch => {
  return {
    leaderProfile: profile_info =>
      dispatch(leaderProfileAction.leaderProfile(profile_info)),
    saveRateLeader: rateVal  => 
      dispatch(leaderProfileAction.saveRateLeader(rateVal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(leaderProfile);
