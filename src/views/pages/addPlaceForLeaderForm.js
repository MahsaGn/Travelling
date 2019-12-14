import React from 'react'
import '../styles/place.css'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header';
import {connect} from 'react-redux'

import * as addPlaceForLeaderAction from '../../core/addPlaceForLeaderForm/addPlaceForLeaderForm_action'
import * as allPlaceAction from '../../core/allPlaces/allPlaces_action'


class addPlaceForLeader extends React.Component{
    constructor(props){
        super(props)
        this.state={
            places:[],
            choosedPlace:{
                title:"",
                id:""
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateState = this.updateState.bind(this)
    }
    async componentWillMount(){
        await this.props.allPlace()
        if(this.props.allPlaceLoaded)
        {
        let options = this.props.allPlaceInfo.map((place)=><option>{place.id}.{place.title}</option>)
        console.log("optiooons are",options)
            this.setState({
                places:options,
                choosedPlace:{
                    title:this.props.allPlaceInfo[0].title,
                    id:this.props.allPlaceInfo[0].id
                }
            })
        }
    }

    
    async handleSubmit(e) {
      console.log("in handel submit add place for leader",this.state.choosedPlace[0])
      e.preventDefault();
          await this.props.addPlaceForLeader(this.state.choosedPlace[0])
        if(this.props.placeAddedForLeader)
          return window.location.replace('/')
        else{
          e.preventDefault()
            alert("امکان لیدر شدن شما برای این مکان وجود ندارد")
        }
    }
    
      updateState(e){
        e.preventDefault()
        this.setState({
          choosedPlace:e.target.value
    })
      }

      

    render(){
        return(
            <div className="addplaceforleaderForm">
        <Header/>
        <Form onSubmit={this.handleSubmit} id="Form">
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 place_input">
        <Label for="exampleSelect" id="form_label">مکان مورد نظر</Label>
          <Input type="select" onChange={this.updateState} value={this.state.choosedPlace}  name="choosedPlace" className="form_input ">
           {this.state.places} 
          </Input>
        </FormGroup>
        <br/>
          <Button id="form_submit">ثبت</Button>
      </Form> 
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    
    return{
        allPlaceInfo: state.allPlaces_reducer.allPlace_info,
        allPlaceLoaded : state.allPlaces_reducer.allPlaceLoaded,
        placeAddedForLeader : state.addPlaceForLeader_reducer.placeAddedForLeader
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
        allPlace : () => dispatch(allPlaceAction.allPlace()),
        addPlaceForLeader: (choosedPlace) =>dispatch(addPlaceForLeaderAction.addPlaceForLeader(choosedPlace))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(addPlaceForLeader);