import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import './style.css';
import SearchBaar from './searchPlaceBar'
import axios from 'axios'
 export default class home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          palceData:[],
          placeid: "10"
        };
      }
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
            <br/>
            <Link to="/createNewPlace">click to create new place</Link>
            <br/>
            <SearchBaar/>
            <br/>
            <Link to='/authentication'>click to auth</Link>
                <br/>
                <Link to='become leader'>click to become leader</Link>
          </div>
        );
      }
     
 }
