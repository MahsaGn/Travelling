import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './homePage.css';
import Column from './column';
import SearchPlaceBar from './searchPlaceBar';
import { Button ,Nav, NavLink, Navbar, Form, NavbarBrand } from 'reactstrap';
import SearchField from "react-search-field";
import axios from 'axios';
import Header from './header';

const data = [
  {
  "image" : 'https://www.alaedin.travel/Files/Jazebe/Marvdasht/persepolis/Alaedin-Travel-Company-Attraction-Persepolis-Shiraz-23.jpg',
  "title" : 'تخت جمشید' 
  },
  {
    "image" : 'https://www.alaedin.travel/Files/Jazebe/Marvdasht/persepolis/Alaedin-Travel-Company-Attraction-Persepolis-Shiraz-23.jpg',
    "title" : 'تخت جمشید' 
  },
  {
    "image" : 'https://www.alaedin.travel/Files/Jazebe/Marvdasht/persepolis/Alaedin-Travel-Company-Attraction-Persepolis-Shiraz-23.jpg',
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
      data1=json;
    }).catch(console.log("error"));
    axios.get(`http://127.0.0.1:8000/api/Places/UniquePlace/?search=$2`)
    .then(json => {
      console.log("responce");
      data2=json;
    }).catch(console.log("error"));
    axios.get(`http://127.0.0.1:8000/api/Places/UniquePlace/?search=$3`)
    .then(json => {
      console.log("responce");
      data3=json;
    }).catch(console.log("error"));
       
      var topPlacesData = data.map((topData)=> <Column info={topData}/>); 
      this.setState({
      topPlaces:topPlacesData
      })
  }

  render(){
    
      
    return (
      <div id="maindiv">
        <Header/>
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