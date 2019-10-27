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
      id:""
    }
   
  }
  
  componentWillMount(){
    console.log("in handel submit")
    if(typeof(this.props.location.data)!= "undefined")
    {

      console.log(this.props.location.data.info)
      this.setState({id : this.props.location.data.info});
      console.log("id is")
      console.log(this.state.id)
    }
    axios.get(`http://127.0.0.1:8000/api/Places/UniquePlace/?search=${this.state.id}`)
    .then(json => {
      console.log("response")
      console.log(json.data[0])
      this.setState({info: json.data[0]})
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
