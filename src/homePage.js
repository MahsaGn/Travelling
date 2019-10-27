import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './homePage.css';
import Column from './column';
import SearchPlaceBar from './searchPlaceBar';
import { Button ,Nav, NavLink, Navbar, Form, NavbarBrand,Image} from 'reactstrap';
import PlaceCard from './placeCard';
import SearchField from "react-search-field";
import axios from 'axios';
import Header from './header';


const data = [
  {
  "image1" : 'https://www.alaedin.travel/Files/Jazebe/Marvdasht/persepolis/Alaedin-Travel-Company-Attraction-Persepolis-Shiraz-23.jpg',
  "title" : 'تخت جمشید' 
  },
  {
    "image1" : 'https://www.alaedin.travel/Files/Jazebe/Marvdasht/persepolis/Alaedin-Travel-Company-Attraction-Persepolis-Shiraz-23.jpg',
    "title" : 'تخت جمشید' 
  },
  {
    "image1" : 'https://www.alaedin.travel/Files/Jazebe/Marvdasht/persepolis/Alaedin-Travel-Company-Attraction-Persepolis-Shiraz-23.jpg',
    "title" : 'تخت جمشید'
  }
  ];
class homePage extends React.Component {
  constructor(){
    super();
    this.state={topPlaces:[]}
  };
  
  componentWillMount(){
    console.log("in component");
    const data1=null;
    const data2=null;
    const data3=null;
    axios.get(`http://127.0.0.1:8000/api/Places/UniquePlace/?search=$1`)
    .then(json => {
      console.log("responce");
      data1=json.data[0];
    }).catch(console.log("error"));
    axios.get(`http://127.0.0.1:8000/api/Places/UniquePlace/?search=$2`)
    .then(json => {
      console.log("responce");
      data2=json.data[0];
    }).catch(console.log("error"));
    axios.get(`http://127.0.0.1:8000/api/Places/UniquePlace/?search=$3`)
    .then(json => {
      console.log("responce");
      data3=json.data[0];
    }).catch(console.log("error"));
       //var data=[data1,data2,data3];
      var topPlacesData = data.map(d=><PlaceCard 
     
      title={d.title} 
      src= {d.image1}
      discriptions={d.Discriptions}
      id={d.id} /> )
      this.setState({
      topPlaces:topPlacesData
      })
  }

  render(){
    
      
    return (
      <div id="maindiv">
        <Header/>
        <img id="homepic" src={'https://agence-de-traduction.org/wp-content/uploads/2016/04/tourisme.png'}/>
        <div class="row">
          {this.state.topPlaces}
        </div>
        <div class="row">
        </div>
      </div>
    );
  };
};
export default  homePage;