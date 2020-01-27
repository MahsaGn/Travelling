import React from "react";
import "../../styles/style.css";

export default class CommentCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location.replace(`/userProfile/${this.props.data.userid}`);
  }

  render() {
    return (
      <div onClick={this.handleClick} id="comment_card">
        <div id="commentCard_user_div">
          <img
            id="commentCard_user_img"
            src={this.props.data.user_image}
            alt={this.props.data.username}
          />
          <div id="commentCard_user_name">
            <p id="commentCard_user_username_text">نام کاربری</p>
            <p id="commentCard_user_username">{this.props.data.username} </p>
          </div>
        </div>
        <div id="commentCard_commnet_div">
          <p id="commentCard_p">{this.props.data.comment}</p>
        </div>
      </div>
    );
  }
}
