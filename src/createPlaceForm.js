  
import React from 'react'
import axios from 'axios' 
import './place.css'
import {Button,CustomInput, Form, FormGroup,FormText, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class createPlace extends React.Component{
    constructor(){
        super();
        this.state={
          category:"",
          title:"",
          descriptions:"",
          hardness:"",
          address:"",
          time:"",
          city:"",
          likes:"",
          image_1:"",
          image_2:""
      };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.updateState=this.updateState.bind(this);
        this.updateStateNum=this.updateStateNum.bind(this)
      }


      handleSubmit(e) {
        console.log("in handel submit")
        e.preventDefault();
        axios.post('http://localhost:8000/api/Places/CreatePlace/',{
          Categories:this.state.category,
          Title :this.state.title,
          Description:this.state.discriptions,
          Hardness:this.state.hardness,
          Address:this.state.addrress,
          Time:this.state.time,
          City:this.state.city,
          Likes:this.state.likes,
          image_1:this.state.image_1,
          image_2:this.state.image_2
        }).then(json => {
          console.log("response")
          console.log(json)
        return window.location.replace('/')
        }).catch(error =>{
          alert(error.message)
      });
    }
    
      updateState(e){
        e.preventDefault()
          this.setState({
              [e.target.name]: e.target.value
          });
      }

      updateStateNum(e){
        e.preventDefault()
        if(e.target.validity.valid && e.target.value>0 && e.target.value<11) {
          this.setState({
              [e.target.name]: e.target.value
          });
        }
      }

      updateHardness(e){
        this.setState({
          Hardness: this.state.hardness
        })
      }
      
    render(){
    return(
      <Form onSubmit={this.handleSubmit} id="placeForm">
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label">نام</Label>
          <Input name="title" value={this.state.Title} onChange={this.updateState} type="text" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label">تاریخچه</Label>
          <Input name="description" value={this.state.description} onChange={this.updateState} type="text" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label">نشانی</Label>
          <Input name="address" value={this.state.addrress} onChange={this.updateState} type="text" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label">شهر</Label>
          <Input name="city" value={this.state.city} onChange={this.updateState} type="text" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
        <Label for="exampleSelect" id="place_label">نوع مکان</Label>
          <Input type="select" name="select" id="place_input">
            <option>تاریخی</option>
            <option>موزه</option>
            <option>جنگل</option>
            <option>کوه</option>
            <option>طبیعت</option>
            <option>پارک ملی</option>
            <option>هنر عمومی</option>
            <option>مذهبی</option>
          </Input>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label">میزان سختی از 10</Label>
          <Input name="hardness" value={this.state.hardness} pattern="[1-5]" onChange={this.updateStateNum} type="number" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label"> محبوبیت از 5</Label>
          <Input name="likes" value={this.state.likes} pattern="[0-9]" onChange={this.updateStateNum} type="number" id="place_input"/>
        </FormGroup>
        <FormGroup className="place_input">
          <Label id="place_label">1بارگذاری عکس</Label>
          <CustomInput value={this.state.image_1} onChange={this.updateState} type="file" accept=".JPG, .png, .JPEG" name="image_1" id="place_input"/>
        </FormGroup>
        <FormGroup className="place_input">
          <Label id="place_label">2بارگذاری عکس</Label>
          <CustomInput value={this.state.image_2} onChange={this.updateState} type="file" accept=".JPG, .png, .JPEG" name="image_2" id="place_input" />
        </FormGroup>
          <Button id="placeform_submit">ثبت</Button>
      </Form>
        );
    }
}