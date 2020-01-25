import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/style.css';
import { connect } from 'react-redux'
import { FormGroup,Button, Label, Input } from 'reactstrap';
import * as placeAction from '../../../core/place/place_action';

class newComment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: {
                objId: "",
                text: ""
            },
            isAnyComment: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    async handleChange() {
        let response  =await this.props.addComment(this.state.comment)
        if(response == false)
        {
            alert("شما قادر به ثبت پیام نیستید")
        }
        else{
            alert("نظر شما ثبت شد")
        }
    }   

    render() {
        return (
            <div>
                <FormGroup id="newComment">
                    <Label id="newcomment_user_div" >نظر خود را ثبت کنید</Label>
                    <input className="newcomment_commnet_div" type="textarea" name="text" />
                    <Button onClick={this.handleChange} className ="saveNewComment">ثبت رای</Button>
                </FormGroup>
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

const mapDispatchToProps = (dispatch) => {
    return{
        addComment : (comment_info) => dispatch(placeAction.addNewComent(comment_info))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(newComment);