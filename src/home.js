import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import './style.css';
import axios from 'axios'
 export default class home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          palceData:[],
          placeid: "10"
        };
        //this.fetchPlace=this.fetchPlace.bind(this)
      }
      //id ro too url behesh bedam???
      /*fetchPlace(e) {
        console.log("in handel submit")
        e.preventDefault();
        axios.get('http://localhost:8000/api/Places/ViewPlace/')
        .then(json => {
          console.log("response")
          console.log(json.data[0].id)
          this.setState({palceData: json.data,placeid:json.data[0].id})
          console.log(this.state.placeid)
        }).catch(e =>{
        console.log(e.message)
      });
    }*/
    handleClick(){
      return window.location.replace('/place')
    }
    render() {
        console.log("in render home")
        console.log(this.state.palceData.id)
        var id =1
        return (
          <div >
            <p onClick={this.handleClick}>hiiii clock on me</p>
              <Link to={{pathname: `/place/${id}`,
            data : {info: 1}}}>click to see first plasey</Link>
          </div>
        );
      }
     
 }