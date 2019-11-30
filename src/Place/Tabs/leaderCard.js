import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../style.css";
import { CardImg, CardBody, Card, Button, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import LeaderCard from "./leaderCard";
import Axios from "axios";

export default class leaderCard extends React.Component {
  constructor(props) {
    super(props);
    this.showProfile = this.showProfile.bind(this);
    this.state = { isLeader: false };
  }

  componentWillMount() {
    Axios.get("url").then(datas => {
      this.setState({
        leader: datas.map(d => <LeaderCard info={d} />),
        isLeader: true
      });
    });
  }

  render() {
    return (
      <Card id="leader_card">
        <CardImg top src={this.props.info.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.info.username}</CardTitle>
          <Link
            to={{
              pathname: `/leaderProfile/${this.info.username}`,
              data: { info: this.info.username }
            }}
          >
            <Button>نمایش جزئیات</Button>
          </Link>
        </CardBody>
      </Card>
    );
  }
}
