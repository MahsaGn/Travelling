import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../../../styles/style.css';
import CommentCard from '../commentCard'
import { connect } from 'react-redux'

const fakeComments = [
    {
        userid :4,
        user_image : '/leader_back.jpg',
        username : 'mahsa',
        comment : 'مکان بسیار جالب و دیدنی ست حتما پیشنهاد میکنم'
    },
    {
        userid :4,
        user_image : '/leader_back.jpg',
        username : 'mahsa',
        comment : 'مکان بسیار جالب و دیدنی ست حتما پیشنهاد میکنم'
    },
    {
        userid :4,
        user_image : '/leader_back.jpg',
        username : 'mahsa',
        comment : 'مکان بسیار جالب و دیدنی ست حتما پیشنهاد میکنم'
    },
    {
        userid :4,
        user_image : '/leader_back.jpg',
        username : 'mahsa',
        comment : 'مکان بسیار جالب و دیدنی ست حتما پیشنهاد میک gjorjg oirwjgoiw grhg urhguse hgushe guiseh guthe iuseth ises hte h میک gjorjg oirwjgoiw grhg urhguse hgushe میک gjorjg oirwjgoiw grhg urhguse hgushe guiseh guthe iuseth ises hte h میک gjorjg oirwjgoiw grhg urhguse hgushe میک gjorjg oirwjgoiw grhg urhguse hgushe guiseh guthe iuseth ises hte h میک gjorjg oirwjgoiw grhg urhguse hgushe میک gjorjg oirwjgoiw grhg urhguse hgushe guiseh guthe iuseth ises hte h میک gjorjg oirwjgoiw grhg urhguse hgushe میک gjorjg oirwjgoiw grhg urhguse hgushe guiseh guthe iuseth ises hte h میک gjorjg oirwjgoiw grhg urhguse hgushe میک gjorjg oirwjgoiw grhg urhguse hgushe guiseh guthe iuseth ises hte h میک gjorjg oirwjgoiw grhg urhguse hgushe میک gjorjg oirwjgoiw grhg urhguse hgushe guiseh guthe iuseth ises hte h میک gjorjg oirwjgoiw grhg urhguse hgushe guiseh guthe iuseth ises hte h میک gjorjg oirwjgoiw grhg urhguse hgushe guiseh guthe iuseth ises hte h میک gjorjg oirwjgoiw grhg urhguse hgushe guiseh guthe iuseth ises hte h میک gjorjg oirwjgoiw grhg urhguse hgushe guiseh guthe iuseth ises hte h میک gjorjg oirwjgoiw grhg urhguse hgushe guiseh guthe iuseth ises hte h میک gjorjg oirwjgoiw grhg urhguse hgushe guiseh guthe iuseth ises hte h میک gjorjg oirwjgoiw grhg urhguse hgushe guiseh guthe iuseth ises hte hنم'
    },
    {
        userid :4,
        user_image : '/leader_back.jpg',
        username : 'mahsa',
        comment : 'مکان بسیار جالب و دیدنی ست حتما پیشنهاد میکنم'
    }
]

class NavItem_leader extends React.Component {

  constructor(props) {
    super(props);
    this.state={
        comments :[],
        isAnyComment : false
    }
  }

  async componentWillMount(){
    let comments = fakeComments//await commentsOfPlace(this.props.place_id)
    if (comments == false)
    {
        this.setState(
            {
                isAnyComment : false
            }
        )
    }
    let  comments_components = comments.map((comment)=>
        <CommentCard data={comment}/>
    )
    this.setState(
        {
            comments : comments_components,
            isAnyComment : true
        }
    )
  }

  render() {
    return (
      <div>
        { this.props.placeLoaded==false || this.state.isAnyComment==false?
         <p>هیچ نظری ای تا کنون ثبت نشده است.</p>:
          this.state.comments}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    placeLoaded: state.place_reducer.placeLoaded,
    place_id: state.place_reducer.place_id
  }
}
export default connect(mapStateToProps)(NavItem_leader);