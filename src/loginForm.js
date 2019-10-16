import React from 'react'
import axios from 'axios' 
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class loginForm extends React.Component{
    constructor(){
      super();
      this.state={
        hasToken:"true",
        username:"",
        password:""
    };
      this.handleSubmit=this.handleSubmit.bind(this);
      this.updatePassword=this.updatePassword.bind(this);
      this.updateUsername=this.updateUsername.bind(this);
    }
    
    handleSubmit(e) {
      console.log("in handel submit")
      e.preventDefault();
      axios.post('http://localhost:8000/api/token/',{
        username:this.state.username,
        password:this.state.password
      }).then(json => {
          return this.submitResult()
      })
  }


  submitResult(json) {
      if (jason.) {
          console.log("has token")
          localStorage.setItem("token", json.data);
          return window.location.replace('/dashboard')
      }
      else {
          return (<alert variant="danger">ایمیل یا رمزعبور اشتباه است</alert>);
      }
  }
  updatePassword(e){
      this.setState({
          password: e.target.value
      });
  }
  updateUsername(e){
      console.log(e.target.value);
    this.setState({
        username: e.target.value
    });
}
 
    render(){
    return(
        <Form id="loginForm" onSubmit={this.handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" id="login_label" className="mr-sm-2">نام کاربری</Label>
        <Input value={this.state.username} onChange={this.updateUsername} type="text" id="login_input" placeholder="نام کاربری خود را وارد کنید" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" id="login_label" className="mr-sm-2">گذرواژه</Label>
        <Input  value={this.state.password} onChange={this.updatePassword} type="password" id="login_input"  name="password" placeholder="گذرواژه خود را وارد کنید" />
      </FormGroup>
      <Button id="loginform_submit">ثبت</Button>
    </Form>
  
    );
}
}
export default loginForm;