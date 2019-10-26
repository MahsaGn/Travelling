import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './homePage.css';
import Column from './column';
import { Button ,Nav, NavLink, Navbar, Form, NavbarBrand } from 'reactstrap';

class homePage extends React.Component {
  constructor(){
    super();
    this.state={topPlaces:[]}
  };
  
  componentWillMount(){
    console.log("in component")
    var data ={
      "p":[{
      "image" : 'https://www.alaedin.travel/Files/Jazebe/Marvdasht/persepolis/Alaedin-Travel-Company-Attraction-Persepolis-Shiraz-23.jpg',
      "title" : 'takhtjamshid' 
      },
      {
        "image" : 'https://www.alaedin.travel/Files/Jazebe/Marvdasht/persepolis/Alaedin-Travel-Company-Attraction-Persepolis-Shiraz-23.jpg',
        "title" : 'takhtjamshid' 
      },
      {
        "image" : 'https://www.alaedin.travel/Files/Jazebe/Marvdasht/persepolis/Alaedin-Travel-Company-Attraction-Persepolis-Shiraz-23.jpg',
        "title" : 'takhtjamshid'
      }
      ]}
      var topPlacesData = data.p.map((topData)=> <Column info={topData}/>); 
      this.setState({
      topPlaces:topPlacesData
      })
  }

  render(){
    
      
    return (
      <div >
        <Navbar >
          <NavbarBrand href="#home" id="navbrand">Home</NavbarBrand>
          <Form inline>
            <Nav >
              <NavLink href="#ContactUs" className="navlink">Contact Us</NavLink>
              <NavLink href="#AboutUs" className="navlink">About Us</NavLink>
              <NavLink href="#BecomeLeader" className="navlink">BecomeLeader</NavLink>
              <NavLink href="#AddPlace" className="navlink">Add Place</NavLink>
            </Nav>
            <Button variant="outline-primary" className="navbarbutton">Search</Button>
            <Button variant="outline-primary" className="navbarbutton">Login</Button>
            <Button variant="outline-primary" className="navbarbutton">Signup</Button>
          </Form>
        </Navbar>
        <img id="homePic" src={'https://tourkadeh.net/source/matalebnew/shiraz/jamshid2/jamshid.jpg'}/>
  
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