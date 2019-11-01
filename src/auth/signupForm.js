import React from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label, Input,FormFeedback,FormText } from 'reactstrap';
import {signupSubmitAction} from '../actions/signup_action'
import { stat } from 'fs';
class signupForm extends React.Component{
    constructor(props){
      super(props);
      this.handleChange=this.handleChange.bind(this);
      this.reenterPass=this.reenterPass.bind(this);
      this.validityRepass=this.validityRepass.bind(this);
    }

  handleChange(e){
     this.setState({
          [e.target.name]: e.target.value
      });
  }
reenterPass(){
  if(this.props.password==this.props.repassword){
    return true;
  }
  return false;
}

validityRepass(){
  if(this.reenterPass()==true && this.props.repassword!="")
    return <Input valid name="repassword" value={this.props.repassword} onChange={this.handleChange} type="password" className="validity" name="repassword" />
  return <Input invalid name="repassword" value={this.props.repassword} onChange={this.handleChange} type="password" className="validity" name="repassword" />  
}
 
    render(){
      const validityUsername = this.props.username!="" ? <Input valid className="validity" name="username" value={this.props.username} onChange={this.handleChange} type="text" />:
      <Input className="validity" invalid name="username" value={this.props.username} onChange={this.handleChange} type="text"/>
      const validityPass = this.props.password!=""?<Input valid name="password" value={this.props.password} onChange={this.handleChange} type="password" className="validity"  name="password"  />:
      <Input invalid name="password" value={this.props.password} onChange={this.handleChange} type="password" className="validity"  name="password"  />
    return(
        <Form id="Form" onSubmit={this.props.handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">نام کاربری</Label>
        {validityUsername}
        <FormFeedback invalid>پرکردن این فیلدر اجباری ست</FormFeedback>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">نام</Label>
        <Input name="firstname" value={this.props.firstname} onChange={this.handleChange} type="text" id="form_input"/>
        <FormText>پر کردن این قسمت اختیاری ست</FormText>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">نام خانوادگی</Label>
        <Input name="lastname" value={this.props.lastname} onChange={this.handleChange} type="text" id="form_input"/>
        <FormText>پر کردن این قسمت اختیاری ست</FormText>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">درباره من</Label>
        <Input name="itinerary" value={this.props.itinerary} onChange={this.handleChange} type="text" id="form_input"/>
        <FormText>پر کردن این قسمت اختیاری ست</FormText>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" id="form_label" className="mr-sm-2">گذرواژه</Label>
        {validityPass}
        <FormFeedback invalid>پرکردن این فیلدر اجباری ست</FormFeedback>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">تکرار گذرواژه</Label>
        {this.validityRepass()}
        <FormFeedback invalid>پرکردن این فیلدر اجباری ست</FormFeedback>
      </FormGroup>
      <Button id="form_submit">ثبت</Button>
    </Form>
  
    );
}
}
const mapsStateToProps = (state) =>({
  logged_in: state.logged_in,
  username:state.username,
  password:state.password,
  repassword:state.repassword,
  itinerary:state.itinerary,
  firstname:state.firstname,
  lastname:state.lastname
});

const mapsActionToProps =() =>({
  handleSubmit: signupSubmitAction
})

export default connect(mapsStateToProps,mapsActionToProps)(signupForm);