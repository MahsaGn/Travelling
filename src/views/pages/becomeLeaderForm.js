import React from 'react'
import axios from 'axios' 
import {Button,CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/login_signupForm.css'
import { thisExpression } from '@babel/types';

class becomeLeaderForm extends React.Component{
    constructor(){
      super();
      this.state={
          leader_info:{
          nationalID:"",
          has_car:false,
          car_capacity:"",
          car_model:""
        }
    };
      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeNum = this.handleChangeNum.bind(this);
    }
    
    handleSubmit(e) {
      console.log("in handle submite")
      console.log(localStorage.access)
      console.log("in handel submit")
      e.preventDefault();
          axios.post('http://localhost:8000/api/become-leader/',{
            nationalID:this.state.nationalID,
            has_car:this.state.has_car,
            car_capacity:this.state.car_capacity,
            car_model:this.state.car_model
          },{
             headers:
              {
                "Authorization" : `Bearer ${localStorage.access}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
             }).then(json => {
        console.log("response")
        console.log(localStorage.access)
         console.log(json)
         console.log("has token")
         localStorage.setItem("token", json.data);
         console.log(localStorage)
         return window.location.replace('/')
      }).catch(error =>{
        console.log(error)
    });
  }

    handleChange(e){
      let curentSt = this.state.leader_info
      curentSt[e.target.name] = e.target.value
      this.setState({
      leader_info:curentSt
    })
    }
    handleChangeNum(e){
        console.log(e.target.validity.valid && e.target.value>0);
        if(e.target.validity.valid) {
            this.handleChange(e)
        }
    }
 
    render(){
        const model = this.state.leader_info.has_car ?<Input value={this.state.leader_info.car_model} onChange={this.handleChange} type="text"/>:
        <Input disabled value={this.state.leader_info.car_model} onChange={this.updateCar_model} type="text"/>
        const capacity = this.state.leader_info.has_car ? <Input value={this.state.leader_info.car_capacity} onChange={this.handleChangeNum} type="number"/>:
        <Input disabled value={this.state.leader_info.car_capacity} onChange={this.updateCar_capacity} type="number"/>
    return(
        <Form id="Form" onSubmit={this.handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">کد ملی</Label>
        <Input value={this.state.leader_info.nationalID} onChange={this.handleChangeNum} pattern="[0-9]{*}" id="form_input"/>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label">آیا برای گردشگری درصورت درخواست مالک خودرو میباشید؟</Label>
        <CustomInput onChange={this.handleChange} type="switch" id="exampleCustomSwitch" className="switch" name="customSwitch" />
        <Label id="form_label">مدل ماشین</Label>
        {model}
        <Label id="form_label">ظرفیت ماشین</Label>
        {capacity}
      </FormGroup>
      <Button id="form_submit">ثبت</Button>

    </Form>
  
    );
}
}
const mapStateToProps = (state) => {
    
  return{
    isLeader : state.becomeLeader_reducer.isLeader
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      becomeLeader : (leader_info) => dispatch(becomeLeaderAction.beacomeLeader(leader_info))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(becomeLeaderForm);