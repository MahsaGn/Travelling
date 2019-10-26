  
import React from 'react'
import axios from 'axios' 
import qs from 'qs'
import './place.css'
import {Button,CustomInput, Form, FormGroup,FormText, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { throwStatement } from '@babel/types';

export default class createPlace extends React.Component{
    constructor(){
        super();
        this.state={
          category:"تاریخی",
          title:"",
          descriptions:"",
          hardness:"",
          address:"",
          time:"2",
          city:"",
          likes:"",
          image_1:"",
          image_2:"",
          average:"2",
          startTime:"",
          endTime:""
      };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.updateState=this.updateState.bind(this);
        this.updateStateNum=this.updateStateNum.bind(this)
      }
/*

          images:[
            (
               this.state.image_1
            ),
            (
              this.state.image_1
           )
          ]
*/


      handleSubmit(e) {
        console.log("in handel submit")
        e.preventDefault();
        var j ={
          title:this.state.title,
          Description:this.state.descriptions,
          Likes:this.state.likes,
          categories:this.state.category,
          Hardness:this.state.hardness,
          Address:this.state.address,
          Time:this.state.time,
          StartTime:this.state.startTime,
          EndTime:this.state.endTime,
          City:this.state.city,
          images:{
            image:this.state.image_1,
            image:this.state.image_1
          }
          }
        console.log(j)
        axios.post('http://localhost:8000/api/Places/CreatePlace/',qs.stringify(j))
        .then(response => {
          console.log("response")
          console.log(response)
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
          <Input name="title" value={this.state.title} onChange={this.updateState} type="text" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label">تاریخچه</Label>
          <Input name="descriptions" value={this.state.descriptions} onChange={this.updateState} type="text" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label">نشانی</Label>
          <Input name="address" value={this.state.address} onChange={this.updateState} type="text" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label">شهر</Label>
          <Input name="city" value={this.state.city} onChange={this.updateState} type="text" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
        <Label for="exampleSelect" id="place_label">نوع مکان</Label>
          <Input type="select" onChange={this.updateState} value={this.state.category}  name="category" id="place_input">
            <option>تاریخی</option>
            <option>موزه</option>
            <option>جنگل</option>
            <option>کوه</option>
            <option>طبیعت</option>
            <option>پارک ملی</option>
            <option>هنر عمومی</option >
            <option>مذهبی</option>
          </Input>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label">میزان سختی از 10</Label>
          <Input name="hardness" value={this.state.hardness} pattern="[1-5]" onChange={this.updateStateNum} type="number" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label">زمان پایان
          </Label>
          <Input name="endTime" value={this.state.endTime} onChange={this.updateState} type="text" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label">زمان شروع</Label>
          <Input name="startTime" value={this.state.startTime} onChange={this.updateState} type="text" id="place_input"/>
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