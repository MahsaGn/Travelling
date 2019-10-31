import React from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { throwStatement, continueStatement } from '@babel/types';
import {loginAction} from '../actions/login_action'
import {bindActionCreators} from 'redux'

class loginForm extends React.Component{
    constructor(props){
      super(props);
      this.state={
        username:"",
        password:""
      }
      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleChange=this.handleChange.bind(this);
    }
    
    async handleSubmit(e) {
      console.log("in submit login")
      e.preventDefault();
      console.log("info:",this.state.username,"-",this.state.password)
      await loginAction(this.state.username,this.state.password)()
      console.log("login state:",this.props.logged_in)
      if (true == this.props.logged_in)
      {
        console.log("replace window")  
        return window.location.replace('/')
      }
  }

  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
 
    render(){
    return(
        <Form id="Form" onSubmit={this.handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label  id="form_label" className="mr-sm-2">نام کاربری</Label>
        <Input value={this.state.username} name="username" onChange={this.handleChange} type="text" id="form_input" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">گذرواژه</Label>
        <Input value={this.state.password} name="password" onChange={this.handleChange} type="password" id="form_input"  name="password"/>
      </FormGroup>
      <Button id="form_submit">ثبت</Button>
    </Form>
  
    );
}
}
const mapsStateToProps = (state) =>({
  logged_in: state.login.logged_in
});

export default connect(mapsStateToProps)(loginForm);