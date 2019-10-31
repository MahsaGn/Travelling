import React from 'react'
import axios from 'axios' 
import {Button,CustomInput, Form, FormGroup,FormText, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './auth/login_signupForm.css'

class becomeLeaderForm extends React.Component{
    constructor(){
      super();
      this.state={
        nationalID:"",
        has_car:false,
        car_capacity:0,
        car_model:"ندارد"
    };
      this.handleSubmit=this.handleSubmit.bind(this);
      this.updateNationalID=this.updateNationalID.bind(this);
      this.updateHas_car=this.updateHas_car.bind(this);
      this.updateCar_capacity=this.updateCar_capacity.bind(this);
      this.updateCar_model=this.updateCar_model.bind(this);
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

    updateNationalID(e){
        console.log(e.target.validity.valid);
        if(e.target.validity.valid) {
            this.setState({nationalID: e.target.value});
        }
    }

    updateHas_car(e){
        console.log(this.state.has_car)
        this.setState({
            has_car: !this.state.has_car
        });
    }
    updateCar_capacity(e){
        console.log(e.target.validity.valid);
        if(e.target.validity.valid && e.target.value>0) {
            this.setState({car_capacity: e.target.value});
        }
    }
    updateCar_model(e){
        if(this.state.has_car){
            this.setState({
                car_model:e.target.value
            })
        }
    }
 
    render(){
        const model = this.state.has_car ?<Input value={this.state.car_model} onChange={this.updateCar_model} type="text"/>:
        <Input disabled value={this.state.car_model} onChange={this.updateCar_model} type="text"/>
        const capacity = this.state.has_car ? <Input value={this.state.car_capacity} onChange={this.updateCar_capacity} type="number"/>:
        <Input disabled value={this.state.car_capacity} onChange={this.updateCar_capacity} type="number"/>
    return(
        <Form id="Form" onSubmit={this.handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">کد ملی</Label>
        <Input value={this.state.nationalID} onChange={this.updateNationalID} pattern="[0-9]{*}" id="form_input"/>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label">آیا برای گردشگری درصورت درخواست مالک خودرو میباشید؟</Label>
        <CustomInput onChange={this.updateHas_car} type="switch" id="exampleCustomSwitch" className="switch" name="customSwitch" />
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
export default becomeLeaderForm;