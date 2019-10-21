import React, { Component } from 'react';
import Place_nav from './Tabs/Place_nav'
import Slides from './slides';
import '../style.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
const items = [
  {
    src: 'https://illia.tech/wp-content/uploads/2019/04/Persepolis-1030x474.jpg',
  },
  {
    src: 'https://illia.tech/wp-content/uploads/2019/04/Persepolis-1030x474.jpg',
  },
  {
    src: 'https://illia.tech/wp-content/uploads/2019/04/Persepolis-1030x474.jpg',
  }
];


export default class Place extends React.Component {
  constructor() {
    super();
   
  }
  state={
    info :""
  }
  componentWillMount(){
    console.log("in handel submit")
    axios.get('http://localhost:8000/api/Places/ViewPlace/')
    .then(json => {
      console.log("response")
      console.log(json.data[32])
      this.setState({info: json.data[32]})
      console.log(this.state.placeid)
    }).catch(
    console.log("error"));

  }

  render() {
    console.log("in place")
    console.log(this.state.info)
    return (
      <div id="mystyle">
        <header >
        </header>
        <body>
          <Slides photos={items}/>
          <Place_nav info={this.state.info}  />
        </body>
      </div>
    );
  }
}
