  
import React from 'react'
import {connect} from 'react-redux'
import '../styles/place.css'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header';
import * as createPlaceAction from '../../core/createPlace/createPlace_action'
import { format } from 'util';

class createPlace extends React.Component{
    constructor(){
        super();
        this.state={
          place_info:{
            category:"تاریخی",
            title:"",
            descriptions:"",
            hardness:"",
            address:"",
            time:"",
            city:"",
            likes:"",
            image1:"",
            image2:"",
            image3:"",
            average:"",
            startTime:"",
            endTime:"",
          }
      };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.updateState=this.updateState.bind(this);
        this.updateStateNum=this.updateStateNum.bind(this)
        this.updateStateImage=this.updateStateImage.bind(this)
      }

      async handleSubmit(e) {
        console.log("in handel submit")
        e.preventDefault();
        await this.props.createPlace(this.state.place_info)
        if(this.props.isCreated)
          return window.location.replace('/')
        else{
          e.preventDefault()
          alert("برای اضافه کردن مکان ابتدا باید بیدر باشید")
        }
  
    }
    
      updateState(e){
        e.preventDefault()
        let curentSt = this.state.place_info
        curentSt[e.target.name] = e.target.value
        this.setState({
          place_info:curentSt
    })
      }

      updateStateNum(e){
        e.preventDefault()
        if(e.target.validity.valid && e.target.value>0 && e.target.value<11) {
          this.updateState(e)
        }
      }

      updateStateImage(e){
        console.log(e.target.name)
        let curentSt = this.state.place_info
        curentSt[e.target.name] = e.target.files[0]
        this.setState({
          palce_info:curentSt
        })
      }
      
    render(){
    return(
      <div>
        <Header/>
        <Form onSubmit={this.handleSubmit} id="placeForm">
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label">نام</Label>
          <Input name="title" value={this.state.place_info.title} onChange={this.updateState} type="text" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label">تاریخچه</Label>
          <Input name="descriptions" value={this.state.place_info.descriptions} onChange={this.updateState} type="text" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label">نشانی</Label>
          <Input name="address" value={this.state.place_info.address} onChange={this.updateState} type="text" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label">شهر</Label>
          <Input name="city" value={this.state.place_info.city} onChange={this.updateState} type="text" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
        <Label for="exampleSelect" id="place_label">نوع مکان</Label>
          <Input type="select" onChange={this.updateState} value={this.state.place_info.category}  name="category" id="place_input">
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
          <Input name="hardness" value={this.state.place_info.hardness} pattern="[1-5]" onChange={this.updateStateNum} type="number" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label">زمان پایان
          </Label>
          <Input name="endTime" value={this.state.place_info.endTime} onChange={this.updateState} type="text" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label">زمان شروع</Label>
          <Input name="startTime" value={this.state.place_info.startTime} onChange={this.updateState} type="text" id="place_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
          <Label className="mr-sm-2" id="place_label"> محبوبیت از 5</Label>
          <Input name="likes" value={this.state.place_info.likes} pattern="[0-9]" onChange={this.updateStateNum} type="number" id="place_input"/>
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
          <input onChange={this.updateStateImage}  type="file" name="image3" id="place_input"/>
        </FormGroup>
          <Button id="placeform_submit">ثبت</Button>
      </Form>
      </div>
        );
    }
}
const mapStateToProps = (state) => {
    
  return{
    isCreated : state.createPlace_reducer.isCreated
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      createPlace : (place_info) => dispatch(createPlaceAction.createPlace(place_info))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(createPlace);