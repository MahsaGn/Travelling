import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/homePage.css";
import PlaceCard from "../components/placeCard";
import * as homePageAction from "../../core/homePage/homePage_action";
import Header from "../components/header";
import ActionCard from "../components/actionCard";
import SearchPlaceBar from "../components/searchPlaceBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../styles/style.css";
import Schedualer from "./schedualer";

class homePage extends React.Component {
  state = {
    placeCards: []
  };

  componentWillMount = async () => {
    console.log("in component");
    await this.props.homePagePlace();
    if (this.props.homePlaceLoaded) {
      let palces = this.props.places_info.map(d => (
        <PlaceCard
          title={d.title}
          src={d.image1}
          discriptions={d.categpries}
          id={d.id}
        />
      ));
      this.setState({
        placeCards: palces
      });
    }
  };

  render() {
    return (
      <div id="maindiv">
        <Header />
        <img id="homepic" src={"home_damavand.jpg"} />
        <div className="homepic_div">
          <h2 className="homepic_div_text">
            بازدید از مکان های دیدنی را با ما تجربه کنید
          </h2>
          <h3 className="homepic_div_text">کجا می خواهید بروید؟</h3>
          <SearchPlaceBar className="searchbar" />
        </div>
        <div className="actions">
          <ActionCard
            title="پیوستن به جمع تورلیدر"
            hoverPic="leader_icon.png"
            url="becomeLeader"
            backPic="/leader_back.jpg"
            description="شما میتوانید به جمع تور لیدرهای ما بپیوندید و به صورت خصوصی یا گروهی به این کار بپردازید"
          />
          <ActionCard
            title="اضافه کردن مکان دیدنی"
            hoverPic="place_icon.png"
            url="createNewPlace"
            backPic="/place_back.jpg"
            description="شما میتوانید یک مکان دیدنی جالب را در سایت اضافه کنید وآن را با همه به اشتراک بگذارید."
          />
          <ActionCard
            title="به اشتراک گذاری سفرنامه"
            hoverPic="travelogue_icon.png"
            url="addTravelogu"
            backPic="/travelogue_back.jpg"
            description="شما میتوانید سفرنامه و تجربیات خود را به اشتراک بگذارید"
          />
          <ActionCard
            title="لیدر شدن برای یک مکان خاص"
            hoverPic="leaderOfPlace_icon.png"
            url="addPlaceForLeaderForm"
            backPic="/leaderOfPlace_back.jpg"
            description="شما میتوانید سفرنامه و تجربیات خود را به اشتراک بگذارید"
          />
        </div>
        <div className="offeredPlace">
          <p className="actions_text"> مکان های دیدنی پیشنهادی</p>
          {this.state.placeCards}
          <Schedualer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    places_info: state.homePage_reducer.homePlace_info,
    homePlaceLoaded: state.homePage_reducer.homePlaceLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    homePagePlace: () => dispatch(homePageAction.homePage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(homePage);
