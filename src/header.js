import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './homePage.css';
import SearchPlaceBar from './searchPlaceBar';
import { Button ,Nav, NavLink, Navbar, Form, NavbarBrand } from 'reactstrap';
import {Link} from 'react-router-dom';

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
<SearchPlaceBar className="searchbar"/>
<Form inline>
  <Nav >
    <NavLink href="#ContactUs" className="navlink">ارتباط با ما</NavLink>
    <NavLink href="#AboutUs" className="navlink">درباره ما</NavLink>
    <NavLink href="/becomeLeader" className="navlink">!میخوام لیدر شم</NavLink>
    <NavLink href="/createNewPlace" className="navlink">اضافه کردن مکان</NavLink>
  </Nav>
  <Link to="/authentication">
    <Button variant="outline-primary" className="navbarbutton" >ورود/ثبت نام</Button>
  </Link>
</Form>
</Navbar>
)
}
}
export default Header; 