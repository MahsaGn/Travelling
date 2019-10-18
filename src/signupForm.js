import React from 'react'
import axios from 'axios' 
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
    
    handleSubmit(e) {
      if(this.reenterPass())
      {
        console.log("in handel submit")
        e.preventDefault();
        axios.post('http://localhost:8000/api/sign-up/',{
          username:this.state.username,
          password:this.state.password,
          email:"",
          first_name:"",
          last_name:"",
          itinerary:"",
          phone_number:""
        }).then(json => {
            console.log(json)
            console.log("has token")
          localStorage.setItem("token", json.data);
          return window.location.replace('/')
        }).catch(error=>{
          this.setState({
            password:"",
            repassword:""
          })
          alert("نام کاربری تکراری میباشد")
        });
      }
      else{
        e.preventDefault();
        alert("گذرنامه شما به درستی تکرار نشده ست")
        this.setState({
          password:"",
          repassword:""})
      }
  }

پ
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
        <Form id="loginForm" onSubmit={this.handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" id="login_label" className="mr-sm-2">نام کاربری</Label>
        <Input value={this.state.username} onChange={this.updateUsername} type="text" id="login_input"/>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" id="login_label" className="mr-sm-2">گذرواژه</Label>
        <Input  value={this.state.password} onChange={this.updatePassword} type="password" id="login_input"  name="password"  />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" id="login_label" className="mr-sm-2">تکرار گذرواژه</Label>
        <Input value={this.state.repassword} onChange={this.updateRepassword} type="password" id="login_input"  name="repassword" />
      </FormGroup>
      <Button id="loginform_submit">ثبت</Button>
    </Form>
  
    );
}
}
export default signupForm;