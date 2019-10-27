import React from 'react';
import Place_nav from './Tabs/Place_nav'
import Slides from './slides';
import '../style.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
const items = [
  {
    key:1,
    image: 'https://illia.tech/wp-content/uploads/2019/04/Persepolis-1030x474.jpg',
  },
  {
    key:2,
    image: 'https://illia.tech/wp-content/uploads/2019/04/Persepolis-1030x474.jpg',
  },
  {
    key:3,
    image: 'https://illia.tech/wp-content/uploads/2019/04/Persepolis-1030x474.jpg',
  }
];


export default class Place extends React.Component {
  constructor() {
    super();
    this.state={
      info :"",
      slidesinfo:[]
    }
   
  }
  
  componentWillMount(){
    console.log("in handel submit")
    var idp = window.location.pathname.split('/')[2]
    console.log(idp)
    axios.get(`http://127.0.0.1:8000/api/Places/UniquePlace/?search=${idp}`)
    .then(json => {
      console.log("response")
      console.log(json.data[0].images)
      this.setState({
        info: json.data[0],
        slidesinfo:json.data[0].images
      })
      console.log(this.state.slidesinfo)
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
          <Slides photos={this.state.slidesinfo}/>
          <Place_nav info={this.state.info}  />
        </body>
      </div>
    );
  }
}
