  
import React from 'react'
import axios from 'axios' 
import FormData from 'form-data'
import '../styles/place.css'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header';


export default class createPlace extends React.Component{
    constructor(){
        super();
        this.state={
          i:0,
          category:"تاریخی",
          title:"",
          descriptions:"",
          hardness:"",
          address:"",
          time:"2",
          city:"",
          likes:"",
          image1:null,
          image2:null,
          image3:null,
          average:"2",
          startTime:"",
          endTime:"",
      };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.updateState=this.updateState.bind(this);
        this.updateStateNum=this.updateStateNum.bind(this)
        this.updateStateImage=this.updateStateImage.bind(this)
      }

      handleSubmit(e) {
        console.log("in handel submit")
        e.preventDefault();
          var formData = new FormData()
          formData.append('title', this.state.title)
          formData.append('Description',this.state.descriptions)
          formData.append('Likes', this.state.likes)
          formData.append('categories', this.state.category)
          formData.append('Hardness',this.state.hardness)
          formData.append('Address', this.state.address)
          formData.append('Time', this.state.title)
          formData.append('StartTime', this.state.startTime)
          formData.append('EndTime', this.state.endTime)
          formData.append('City', this.state.city)
          console.log(this.state.image1)
          formData.append('image1', this.state.image1)
          formData.append('image2', this.state.image2)
          formData.append('image3', this.state.image3)
          console.log(formData.values())
          axios.post('http://localhost:8000/api/Places/CreatePlace/',formData  )
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

      updateStateImage(e){
        console.log(e.target.name)
        this.setState({
          [e.target.name]:e.target.files[0]
        })
      }
      
    render(){
    return(
      <div>
        <Header/>
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
          <input onChange={this.updateStateImage} type="file" name="image1" id="place_input"/>
        </FormGroup>
        <FormGroup className="place_input">
          <Label id="place_label">2بارگذاری عکس</Label>
          <input onChange={this.updateStateImage} type="file" name="image2" id="place_input"/>
        </FormGroup>
        <FormGroup className="place_input">
          <Label id="place_label">3بارگذاری عکس</Label>
          <input onChange={this.updateStateImage} type="file" name="image3" id="place_input"/>
        </FormGroup>
          <Button id="placeform_submit">ثبت</Button>
      </Form>
      </div>
        );
    }
}