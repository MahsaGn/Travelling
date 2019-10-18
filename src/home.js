import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './style.css';
import Place from './Place/Place'
 export default class home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          palceData:[],
        };
    
      }
    
      componentDidMount() {
        console.log("in mount")
            fetch('  http://localhost:3000/places/1').
            then(response =>response.json()).
            then(d => {
                this.setState({
                    palceData: d
                })
                console.log(d)
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
              <Link to={{pathname: `/place/${this.state.palceData.id}`,
            data : {info: this.state.palceData}
        }}>click to see first plasey</Link>
          </div>
        );
      }
     
 }