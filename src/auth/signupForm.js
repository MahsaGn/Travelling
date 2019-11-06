import React from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label, Input,FormFeedback,FormText } from 'reactstrap';
import * as authAction from '../actions/signup_action'
import { stat } from 'fs';
import { throwStatement, thisTypeAnnotation } from '@babel/types';
class signupForm extends React.Component{
    constructor(props){
      super(props);
      this.state={
        signup_info:{
          username:"",
          password:"",
          repassword:"",
          itinerary:"",
          firstname:"",
          lastname:""
        }
      }
      this.handleChange=this.handleChange.bind(this);
      this.validityRepass=this.validityRepass.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleSubmit(e){
    e.preventDefault()
    this.props.signup()
    e.preventDefault()
  }

  handleChange(e){
    let curentSt = this.state.signup_info
    curentSt[e.target.name] = e.target.value
    this.setState({
      signup:curentSt
    })
  }

validityRepass(){
  if(this.state.password == this.state.repassword && this.state.repassword!="")
    return <Input valid name="repassword" value={this.props.repassword} onChange={this.handleChange} type="password" className="validity" name="repassword" />
  return <Input invalid name="repassword" value={this.props.repassword} onChange={this.handleChange} type="password" className="validity" name="repassword" />  
}
 
    render(){
      const validityUsername = this.state.username!="" ? <Input valid className="validity" name="username" value={this.state.username} onChange={this.handleChange} type="text" />:
      <Input className="validity" invalid name="username" value={this.state.username} onChange={this.handleChange} type="text"/>
      const validityPass = this.state.password!=""?<Input valid name="password" value={this.state.password} onChange={this.handleChange} type="password" className="validity"  name="password"  />:
      <Input invalid name="password" value={this.state.password} onChange={this.handleChange} type="password" className="validity"  name="password"  />
    return(
        <Form id="Form" onSubmit={this.props.handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">نام کاربری</Label>
        {validityUsername}
        <FormFeedback invalid>پرکردن این فیلدر اجباری ست</FormFeedback>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">نام</Label>
        <Input name="firstname" value={this.state.firstname} onChange={this.handleChange} type="text" id="form_input"/>
        <FormText>پر کردن این قسمت اختیاری ست</FormText>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">نام خانوادگی</Label>
        <Input name="lastname" value={this.state.lastname} onChange={this.handleChange} type="text" id="form_input"/>
        <FormText>پر کردن این قسمت اختیاری ست</FormText>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">درباره من</Label>
        <Input name="itinerary" value={this.state.itinerary} onChange={this.handleChange} type="text" id="form_input"/>
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
  logged_in: state.logged_in
});

const mapDispatchToProps = (dispatch) => {
  return{
      signup : (signup_info) => dispatch(authAction.signup(signup_info))
  }
}
export default connect(mapsStateToProps,mapDispatchToProps)(signupForm);