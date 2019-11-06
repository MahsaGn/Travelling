import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/homePage.css';
import PlaceCard from '../components/placeCard';
import axios from 'axios';
import Header from '../components/header';


const dataa = [
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
    this.state={
      data1:"",
      data2:"",
      data3:"",
      topPlaces:[]
    }
    this.handleChange=this.handleChange.bind(this)
  };
  
  componentWillMount= async()=>{
    console.log("in component");
    await axios.get(`http://127.0.0.1:8000/api/Places/UniquePlace/?search=1`)
    .then(json => {
      console.log("responce");
      this.setState({
        data1:json.data[0]
      })
    }).catch(console.log("error"));
    await axios.get(`http://127.0.0.1:8000/api/Places/UniquePlace/?search=2`)
    .then(json => {
      console.log("responce");
      this.setState({
        data2:json.data[0]
      })
    }).catch(console.log("error"));
    await axios.get(`http://127.0.0.1:8000/api/Places/UniquePlace/?search=2`)
    .then(json => {
      console.log(json.data[0]);
      this.setState({
        data3:json.data[0]
      })
    }).catch(console.log("error"));
    this.handleChange()
  }
    handleChange(){
      let data=[this.state.data1,this.state.data2,this.state.data3];
      console.log("in")
      console.log(data)
     this.setState({
     topPlaces: data.map(d=><PlaceCard 
       title={d.title} 
       src= {d.image1}
       discriptions={d.Discriptions}
     id={d.id} /> )})
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