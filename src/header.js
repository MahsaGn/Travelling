import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './homePage.css';
import SearchPlaceBar from './searchPlaceBar';
import { Button ,Nav, NavLink, Navbar, Form, NavbarBrand } from 'reactstrap';


class Header extends React.Component {
    constructor(){
      super();
      this.state={topPlaces:[]}
    };
render(){
return(
    <Navbar>
    {//<NavbarBrand href="#home" id="navbrand" >Home</NavbarBrand>//
}
<SearchPlaceBar />
<Form inline>
  <Nav >
    <NavLink href="#ContactUs" className="navlink">ارتباط با ما</NavLink>
    <NavLink href="#AboutUs" className="navlink">درباره ما</NavLink>
    <NavLink href="#BecomeLeader" className="navlink">!میخوام لیدر شم</NavLink>
    <NavLink href="#AddPlace" className="navlink">اضافه کردن مکان</NavLink>
  </Nav>
  
  <Button variant="outline-primary" className="navbarbutton">ورود/ثبت نام</Button>
</Form>
</Navbar>
)
}
}
export default Header; 