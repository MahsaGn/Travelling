import React from "react";
import Header from "../components/header";
import { connect } from "react-redux";
import * as travellougeAction from "../../core/travellouge/travellouge_action";
import { from } from "rxjs";

import "../styles/style.css";

import Card from "../components/card";
import PlaceCard from "../components/placeCard";

class Travellouge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: [],
      places: []
    };
  }
  async componentWillMount() {
    console.log("hiiii");
    let id = window.location.pathname.split("/")[2];
    console.log("travellouge id is ", id);
    await this.props.travellouge(id);
    console.log("after get methon travellouge");
    console.log("placessssssss", this.props.info.places_titles[0].title);

    let placess = "";
    if (this.props.info.places_titles[0] != undefined) {
      placess = this.props.info.places_titles.map(place => (
        <Card
          title={place.title}
          description={place.description}
          id={place.id}
        />
      ));
    } else {
      placess = <p>هنوز هیچ مکانی ثبت نشده است</p>;
    }
    /*
    let leaderss="";
    if (this.props.info.leaders[0] != undefined) {
        placess = this.props.info.leaders.map(place => (
          <Card title={leader.title} description={leader.description} />
        ));
      } else {
        leaderss = <p>هنوز هیچ لیدری ثبت نشده است</p>;
      }*/

    this.setState({
      places: placess
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div id="travellouge">
          <div id="travellouge_content">
            <p id="travellouge_content_title_text">: موضوع</p>
            <h3 id="travellouge_content_title">{this.props.info.title}</h3>
            <br />
            <br />
            <br />
            <p id="travellouge_content_text">{this.props.info.description}</p>
            {/*<p id="travellouge_content_title_text">: لیدرها</p>
            <h3 id="travellouge_content_title">{this.state.leaders}</h3>
            <br />
    <br />*/}
            <p id="travellouge_content_title_text">: مکان ها</p>
            <br />
            <br />
            <h3 id="travellouge_content_title">{this.state.places}</h3>
          </div>
          <div id="travellouge_images_div">
            <img id="travellouge_image" src={this.props.info.image1} />
            <img id="travellouge_image" src={this.props.info.image2} />
            <img id="travellouge_image" src={this.props.info.image3} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    info: state.travellouge_reducer.travellouge_info,
    ifTravellouge: state.travellouge_reducer.ifTravellouge
  };
};

const mapDispatchToProps = dispatch => {
  return {
    travellouge: travellouge_id =>
      dispatch(travellougeAction.travellouge(travellouge_id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Travellouge);
