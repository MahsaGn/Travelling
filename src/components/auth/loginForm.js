import React from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { throwStatement, continueStatement } from '@babel/types';
import * as sessionAction from '../../actions/login_action'

class loginForm extends React.Component{
    constructor(props){
      super(props);
      this.state={
        login_info:{
          username:"",
          password:""
        }
      }
      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleChange=this.handleChange.bind(this);
    }
    
    async handleSubmit(e) {
      e.preventDefault();
      if(this.state.username!="" && this.state.password!="")
      {
        await this.props.login(this.state.login_info)
        if (true == this.props.logged_in)
          return window.location.replace('/')
        else 
          alert("نام کاربری یا رمزعبور نادرست میباشد")
      }
  } 

  handleChange(e){
    let curentSt = this.state.login_info
    curentSt[e.target.name] = e.target.value
    this.setState({
      login_info:curentSt
    })
  }
 
    render(){
      const validityUsername = this.state.username!="" ? 
        <Input valid className="validity" name="username" value={this.state.username} onChange={this.handleChange} type="text" />:
        <Input className="validity" invalid name="username" value={this.state.username} onChange={this.handleChange} type="text"/>
      const validityPass = this.state.password!=""?
        <Input valid name="password" value={this.props.password} onChange={this.handleChange} type="password" className="validity"  name="password"  />:
        <Input invalid name="password" value={this.props.password} onChange={this.handleChange} type="password" className="validity"  name="password"  />
    return(
        <Form id="Form" onSubmit={this.handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label  id="form_label" className="mr-sm-2">نام کاربری</Label>
        {validityUsername}
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">گذرواژه</Label>
        {validityPass}
      </FormGroup>
      <Button id="form_submit">ثبت</Button>
    </Form>
  
    );
}
}

const mapStateToProps = (state) => {
    
  return{
    logged_in : state.login_reducer.logged_in
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      login : (login_info) => dispatch(sessionAction.login(login_info))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(loginForm);