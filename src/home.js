import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './style.css';
import Place from './Place/Place'
import axios from 'axios'
 export default class home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          palceData:[],
        };
        this.fetchPlace=this.fetchPlace.bind(this)
      }
      //id ro too url behesh bedam???
      fetchPlace(e) {
        console.log("in handel submit")
        e.preventDefault();
        axios.get('http://localhost:8000/api/token/')
        .then(json => {
          console.log("response")
          console.log(json)
          this.setState({palceData: json})
        }).catch(error =>{
        alert("اشتباه رخ داده ست")
      });
    }
    handleClick(){
      return window.location.replace('/place/1')
    }
    render() {
        console.log("in render home")
        console.log(this.state.palceData.id)
        return (
          <div >
            <p onClick={this.handleClick}>hiiii clock on me</p>
              <Link onClick={this.fetchPlace} to={{pathname: `/place/${this.state.palceData.id}`,
            data : {info: this.state.palceData}
        }}>click to see first plasey</Link>
          </div>
        );
      }
     
 }