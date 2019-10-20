  
import React from 'react'
import axios from 'axios' 
import {Button,CustomInput, Form, FormGroup,FormText, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class createPlace extends React.Component{
    constructor(){
        super();
        this.state={
          category:"",
          title:false,
          discriptions:"",
          hardness:"",
          addrress:"",
          time:"",
          city:"",
      };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.updateTitle=this.updateTitle.bind(this);
        this.updateDiscription=this.updateDiscription.bind(this);
        this.updateCar_capacity=this.updateCar_capacity.bind(this);
        this.updateCar_model=this.updateCar_model.bind(this);
      }


      handleSubmit(e) {
        console.log("in handel submit")
        e.preventDefault();
        axios.post('http://localhost:8000/api/token/',{
          categories:this.state.category,
          title :this.state.title,
          Description:this.state.discriptions,
          Hardness:this.state.hardness,
          Address:this.state.addrress,
          Time:this.state.time,
          City:this.state.city,
        }).then(json => {
          console.log("response")
          console.log(json)
        return window.location.replace('/')
        }).catch(error =>{
          alert("نام کاربری یا گذرواژه نادرست میباشد")
      });
    }
  
    updateTitle(e){
            this.setState({title: e.target.value});
      }
  
      updateDiscription(e){
          console.log(this.state.discriptions)
          this.setState({
              discriptions: e.target.value
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
      <Form id="loginForm" onSubmit={this.handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" id="login_label" className="mr-sm-2">نام</Label>
          <Input value={this.state.title} onChange={this.updateTitle} type="text" id="login_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" id="login_label" className="mr-sm-2">نام</Label>
          <Input value={this.state.discriptions} onChange={this.updateTitle} type="text" id="login_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <CustomInput onChange={this.updateHas_car} type="switch" id="exampleCustomSwitch" name="customSwitch" label="آیا برای گردشگری درصورت درخواست مالک خودرو میباشید؟" />
          <Label>مدل ماشین</Label>
          {model}
          <Label>ظرفیت ماشین</Label>
          {capacity}
        </FormGroup>
        <Button id="loginform_submit">ثبت</Button>
      </Form>
        );
    }
}