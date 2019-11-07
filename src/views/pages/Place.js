import React from 'react';
import Place_nav from '../components/Place/Tabs/Place_nav'
import Slides from '../components/Place/slides';
import '../styles/style.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import { place } from '../../core/place/place_action';

export default class Place extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount(){
    console.log("in handel submit")
    var idp = window.location.pathname.split('/')[2]
    console.log(idp)
        //info: json.data[0],
        //slidesinfo:[json.data[0].image1,json.data[0].image2,json.data[0].image3]
  }

  render() {
    console.log("in place")
    console.log(this.props.info)
    return (
      <div id="mystyle">
        <header >
        </header>
        <body>
          <Slides photos={this.props.slidesinfo}/>
          <Place_nav info={this.props.info}  />
        </body>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    
  return{
    info : state.place_reducer.data[0],
    slidesinfo : state.place_reducer.Slides,
    placeLeaded : state.place_reducer.profile_info
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      place : (place_id) => dispatch(placeActiob.place(place_id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Place);


