import React from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label, Input,FormFeedback,FormText } from 'reactstrap';
import * as signupAction from '../../../core/signup/signup_action'
import * as loginAction from '../../../core/login/login_action'


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
          lastname:"",
          image:""
        }
      }
      this.handleChange=this.handleChange.bind(this);
      this.validityRepass=this.validityRepass.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.updateStateImage=this.updateStateImage.bind(this)

    }

  async handleSubmit(e){
    e.preventDefault()
    console.log("after submit form")
    await this.props.signup(this.state.signup_info)
    console.log(this.props.signed_up)
    if(this.props.signed_up)
    {
      console.log("signin done going to login")
      let login_info = {
        username: this.state.signup_info.username,
        password: this.state.signup_info.password
      }
      console.log("login info before sending to login in signup",login_info)
      await this.props.login(login_info)
      console.log("user auth done correctly")
      return window.location.replace('/')
    }
    console.log("bad auth")
  }

  handleChange(e){
    let curentSt = this.state.signup_info
    curentSt[e.target.name] = e.target.value
    this.setState({
      signup:curentSt
    })
  }
  updateStateImage(e){
    console.log("هئشلث",e.target.files)
    let curentSt = this.state.signup_info
    curentSt["image"] = e.target.files[0]
    this.setState({
      signup_info:curentSt
    })
  }
  

validityRepass(){
  if(this.state.signup_info.password == this.state.signup_info.repassword && this.state.signup_info.repassword!="")
    return <Input  name="repassword" value={this.props.repassword} onChange={this.handleChange} type="password" />
  return <Input  name="repassword" value={this.props.repassword} onChange={this.handleChange} type="password" className="invalid" />  
}
 
    render(){
      const validityUsername = this.state.signup_info.username=="" ? "invalid" : ""
      const validityPass = this.state.signup_info.password==""? "invalid":""
    return(
        <Form id="Form" onSubmit={this.handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">نام کاربری</Label>
        <Input className={validityUsername} name="username" value={this.state.username} onChange={this.handleChange} type="text" />
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
        <Input name="password" value={this.state.password} onChange={this.handleChange} type="password" className={validityPass}/>
        <FormFeedback invalid>پرکردن این فیلدر اجباری ست</FormFeedback>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">تکرار گذرواژه</Label>
        {this.validityRepass()}
        <FormFeedback invalid>پرکردن این فیلدر اجباری ست</FormFeedback>
      </FormGroup>
      <FormGroup className="place_input">
          <Label id="form_label">بارگذاری عکس</Label>
          <Input onChange={this.updateStateImage}  type="file" name="image" id="form_input"/>
        </FormGroup>
      <Button id="form_submit">ثبت</Button>
      <br/><br/>
    </Form>
  
    );
}
}
const mapsStateToProps = (state) =>({
  logged_in: state.login_reducer.logged_in,
  signed_up: state.signup_reducer.signed_up
});

const mapDispatchToProps = (dispatch) => {
  return{
      signup : (signup_info) => dispatch(signupAction.signup(signup_info)),
      login : (login_info) => dispatch(loginAction.login(login_info))
  }
}
export default connect(mapsStateToProps,mapDispatchToProps)(signupForm);