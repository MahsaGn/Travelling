import React from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/login_signupForm.css'
import * as addTraveloguAction from '../../core/addTravelogu/addTravelogu_action'
import * as allPlaces from '../../core/allPlaces/allPlaces_action'
import "@kenshooui/react-multi-select/dist/style.css"
import MultiSelect from "@kenshooui/react-multi-select";
import Header from '../components/header';
import 'bootstrap/dist/css/bootstrap.css';
class addTravelogu extends React.Component{
    constructor(props){
      super(props);
      this.state={
        travelogu_info:{
            text:"",
            image1:"",
            image2:"",
            image3:"",
            choosedPlaces:[],
            title:"بدون موضوع"
        },
        places:[]
    };
      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeMultiChoice = this.handleChangeMultiChoice.bind(this);
      this.updateStateImage=this.updateStateImage.bind(this);
    }

    async componentWillMount(){
        await this.props.allPlace()
        if(this.props.allPlaceLoaded && this.props.allPlaceInfo!=undefined)
        {
            let options =[]
            this.props.allPlaceInfo.map((place)=>{
              let val = { id: place.id, label: place.title }
              options.push(val)
               })
            this.setState({
                    places:options
                })
        }
    }
    
    async handleSubmit(e) {
      console.log("in handle submite")
      e.preventDefault();
      let list_placeId = this.state.travelogu_info.choosedPlaces.map(x => x.id)
      let currents = this.state.travelogu_info
      currents["choosedPlaces"]=list_placeId
      this.setState({travelogu_info:currents})
      await this.props.addTravelogu(this.state.travelogu_info)
      if(this.props.isTraveloguAdded)
         return window.location.replace('/')
      else
        alert("امکان اضافه کردن سفرنامه نمیباشد، لطفا بعدا امتحان کنید")
  }

    handleChange(e){
        let curentSt = this.state.travelogu_info
        curentSt[e.target.name] = e.target.value
        this.setState({travelogu_info:curentSt})
    }

    handleChangeMultiChoice(selectedItems) {
      console.log(selectedItems)
      let curentSt = this.state.travelogu_info
        curentSt["choosedPlaces"] = selectedItems
        this.setState({travelogu_info:curentSt})
        console.log(selectedItems)

    }

    updateStateImage(e){
        let curentSt = this.state.travelogu_info
        curentSt[e.target.name] = e.target.files[0]
        this.setState({travelogu_info:curentSt})
      }
 
    render(){
    return(
      <div>
      <Header/>
        <Form id="Form" onSubmit={this.handleSubmit}>
           <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">موضوع سفرنامه</Label>
        <Input  className="form_input" name="title" type="text" onChange={this.handleChange}  value={this.state.travelogu_info.title}> 
        </Input>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">متن سفرنامه</Label>
        <textarea  className="text_area_form" name="text" onChange={this.handleChange}  value={this.state.travelogu_info.text}> 
        </textarea>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label">مکان ها</Label>
        <MultiSelect
        items={this.state.places }
        selectedItems={this.state.travelogu_info.choosedPlaces}
        onChange={this.handleChangeMultiChoice}
        />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label id="form_label">1بارگذاری عکس</Label>
          <Input onChange={this.updateStateImage} type="file" name="image1" id="form_input"/>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label">2بارگذاری عکس</Label>
        <Input onChange={this.updateStateImage} type="file" name="image2" id="form_input"/>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label">3بارگذاری عکس</Label>
        <Input onChange={this.updateStateImage}  type="file" name="image3" id="form_input"/>
      </FormGroup>
      <Button id="placeform_submit">ثبت</Button>
    </Form>
    </div>
    );
}
}
const mapStateToProps = (state) => {
    
  return{
    allPlaceInfo: state.allPlaces_reducer.allPlace_info,
    allPlaceLoaded : state.allPlaces_reducer.allPlaceLoaded,
    isTraveloguAdded : state.addTravelogu_reducer.isTraveloguAdded
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addTravelogu : (travelogu_info) => dispatch(addTraveloguAction.addTravelogu(travelogu_info)),
    allPlace : () => dispatch(allPlaces.allPlace()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(addTravelogu);