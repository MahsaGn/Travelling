import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import "../styles/searchBar.css";
export default class card extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("in cardddd", this.props.id);
    window.location.replace(`/place/${this.props.id}`);
  }
  render() {
    return (
      <Card bg="light" style={{ width: "10rem" }} className="card">
        <Card body>
          <Card
            title
            className="card_title"
            gutterBottom
            variant="h6"
            component="h2"
          >
            {this.props.title}
          </Card>

          <Button onClick={this.handleClick} size="lg" variant="info">
            نمایش اطلاعات
          </Button>
        </Card>
      </Card>
    );
  }
}
