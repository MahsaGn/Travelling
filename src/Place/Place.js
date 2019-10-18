import React, { Component } from 'react';
import Place_nav from './Tabs/Place_nav'
import Slides from './slides';
import '../style.css';
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
          <Slides photos={items}/>
          <Place_nav info={this.state.info}  />
        </body>
          
      </div>
    );
  }
}
