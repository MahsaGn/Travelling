import React from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label, Input,FormFeedback,FormText } from 'reactstrap';
import {signupAction} from '../actions/signup_action'
class signupForm extends React.Component{
    constructor(){
      super();
      this.state={
        username:"",
        password:"",
        repassword:"",
        itinerary:"",
        firstname:"",
        lastname:""
    };
      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleChange=this.handleChange.bind(this);
      this.reenterPass=this.reenterPass.bind(this);
      this.validityRepass=this.validityRepass.bind(this);
    }
    
    async handleSubmit(e) {
      console.log(this.state)
      if(this.reenterPass() && this.state.username!="" && this.state.password!="")
      {
        console.log("in handel submit")
        e.preventDefault();
        await signupAction(this.state.username,this.state.password,this.state.firstname,
          this.state.lastname,this.state.itinerary)()
        if(this.props.logged_in ==true)
          return window.location.replace('/')
      } 
      else{
        e.preventDefault();
        alert("موارد خواسته شده به درستی پر نشده اند")
        this.setState({
          password:"",
          repassword:""})
      }
    }

  handleChange(e){
     this.setState({
          [e.target.name]: e.target.value
      });
  }
reenterPass(){
  if(this.state.password==this.state.repassword){
    return true;
  }
  return false;
}

validityRepass(){
  if(this.reenterPass()==true && this.state.repassword!="")
    return <Input valid name="repassword" value={this.state.repassword} onChange={this.handleChange} type="password" className="validity" name="repassword" />
  return <Input invalid name="repassword" value={this.state.repassword} onChange={this.handleChange} type="password" className="validity" name="repassword" />  
}
 
    render(){
      const validityUsername = this.state.username!="" ? <Input valid className="validity" name="username" value={this.state.username} onChange={this.handleChange} type="text" />:
      <Input className="validity" invalid name="username" value={this.state.username} onChange={this.handleChange} type="text"/>
      const validityPass = this.state.password!=""?<Input valid name="password" value={this.state.password} onChange={this.handleChange} type="password" className="validity"  name="password"  />:
      <Input invalid name="password" value={this.state.password} onChange={this.handleChange} type="password" className="validity"  name="password"  />
    return(
        <Form id="Form" onSubmit={this.handleSubmit}>
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
  logged_in: state.login.logged_in
});

export default connect(mapsStateToProps)(signupForm);