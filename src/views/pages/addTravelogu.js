import React from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/login_signupForm.css'
import * as addTraveloguAction from '../../core/addTravelogu/addTravelogu_action'
import * as allPlaces from '../../core/allPlaces/allPlaces_action'

class addTravelogu extends React.Component{
    constructor(props){
      super(props);
      this.state={
        travelogu_info:{
            text:"",
            image1:"",
            image2:"",
            image3:"",
            choosedPlaces:[]
        },
        places:[],
        currentPlaceList:""
    };
      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.updateStateImage=this.updateStateImage.bind(this)    
    }

    async componentWillMount(){
        await this.props.allPlace()
        if(this.props.allPlaceLoaded && this.props.allPlaceInfo!=undefined)
        {
            let options = this.props.allPlaceInfo.map((place)=><option>{place.id}.{place.title}</option>)
            this.setState({
                    places:options,
                    choosedPlace:{
                        title:this.props.allPlaceInfo[0].title,
                        id:this.props.allPlaceInfo[0].id
                    }
                })
        }
        else{
            alert("هیچ مکانی برای اضافه کردن سفرنامه موجود نمیباشد")
        }
    }
    
    async handleSubmit(e) {
      console.log("in handle submite")
      e.preventDefault();
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

    updateStateImage(e){
        console.log(e.target.name)
        let curentSt = this.state.travelogu_info
        curentSt[e.target.name] = e.target.files[0]
        this.setState({travelogu_info:curentSt})
      }
 
    render(){
    return(
        <Form id="Form" onSubmit={this.handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="form_label" className="mr-sm-2">متن سفرنامه</Label>
        <Input name="text" value={this.state.travelogu_info.text} onChange={this.handleChangeNum} type="text" id="form_input"/>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label id="form_label">مکان ها</Label>
          <Input type="select" onChange={this.updateState} value={this.state.travelogu_info.choosedPlace}  name="choosedPlace" id="form_input">
           {this.state.places} 
          </Input>
    </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label id="form_label">1بارگذاری عکس</Label>
          <input onChange={this.updateStateImage} type="file" name="image1" id="form_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label id="form_label">2بارگذاری عکس</Label>
          <input onChange={this.updateStateImage} type="file" name="image2" id="form_input"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label id="form_label">3بارگذاری عکس</Label>
          <input onChange={this.updateStateImage}  type="file" name="image3" id="form_input"/>
        </FormGroup>
      <Button id="placeform_submit">ثبت</Button>

    </Form>
  
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