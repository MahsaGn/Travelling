import React, { Component } from 'react';
import Place_nav from './Tabs/Place_nav'
import Slides from './slides';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.css';
const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3'
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
    if(typeof(this.props.location.data)!= "undefined")
    {
      console.log(this.props.location.data.info)
      this.setState({info : this.props.location.data.info});
      console.log(this.state.info)
    }

  }

  render() {
    console.log("in place")
    console.log(this.state.info)
    return (
      <div id="mystyle">
        <header >
        </header>
        <body>
          <Slides/>
          <Place_nav info={this.state.info} />
        </body>
          
      </div>
    );
  }
}
