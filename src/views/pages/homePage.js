import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/homePage.css';
import PlaceCard from '../components/placeCard';
import * as homePageAction from '../../core/homePage/homePage_action'
import Header from '../components/header';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class homePage extends React.Component {
  state={
    placeCards:[]
  }
  
  componentWillMount= async()=>{
    console.log("in component");
    await this.props.homePagePlace()
    if(this.props.homePlaceLoaded)
    {
      let palces =  this.props.places_info.map(d=><PlaceCard 
        title={d.title} 
        src= {d.image1}
        discriptions={d.categpries}
      id={d.id} /> )
      this.setState({
        placeCards:palces
      })
    }
  }

  render(){
    return (
      <div id="maindiv">
        <Header/>
        <img id="homepic" src={'https://agence-de-traduction.org/wp-content/uploads/2016/04/tourisme.png'}/>
        <div class="row">
          {this.state.placeCards}
        </div>
        <Link to="/addPlaceForLeaderForm">اضافه کردن مکان</Link>
      </div>
    );
  };
};
const mapStateToProps = (state) => {
    
  return{
    places_info : state.homePage_reducer.homePlace_info,
    homePlaceLoaded : state.homePage_reducer.homePlaceLoaded,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      homePagePlace : () => dispatch(homePageAction.homePage())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(homePage);


