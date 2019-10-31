import React from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {signupAction} from '../actions/signup_action'
class signupForm extends React.Component{
    constructor(){
      super();
      this.state={
        username:"",
        password:"",
        repassword:""
    };
      this.handleSubmit=this.handleSubmit.bind(this);
      this.updatePassword=this.updatePassword.bind(this);
      this.updateRepassword=this.updateRepassword.bind(this);
      this.updateUsername=this.updateUsername.bind(this);
      this.reenterPass=this.reenterPass.bind(this);
    }
    
    async handleSubmit(e) {
      if(this.reenterPass())
      {
        console.log("in handel submit")
        e.preventDefault();
        await signupAction(this.state.username,this.state.password)()
        if(this.props.logged_in ==true)
          return window.location.replace('/')
      } 
      else{
        e.preventDefault();
        alert("گذرنامه شما به درستی تکرار نشده ست")
        this.setState({
          password:"",
          repassword:""})
      }
    }

  updatePassword(e){
      this.setState({
          password: e.target.value
      });
  }

  updateRepassword(e){
    this.setState({
        repassword: e.target.value
    });
  }
  updateUsername(e){
      console.log(e.target.value);
    this.setState({
        username: e.target.value
    });
}
reenterPass(e){
  if(this.state.password==this.state.repassword){
    return true;
  }
  return false;
}
 
    render(){
    return(
        <Form id="Form" onSubmit={this.handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">نام کاربری</Label>
        <Input value={this.state.username} onChange={this.updateUsername} type="text" id="form_input"/>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" id="form_label" className="mr-sm-2">گذرواژه</Label>
        <Input  value={this.state.password} onChange={this.updatePassword} type="password" id="form_input"  name="password"  />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">تکرار گذرواژه</Label>
        <Input value={this.state.repassword} onChange={this.updateRepassword} type="password" id="form_input"  name="repassword" />
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