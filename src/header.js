import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './homePage.css';
import SearchPlaceBar from './searchPlaceBar';
import { Button ,Nav, NavLink, Navbar, Form, NavbarBrand } from 'reactstrap';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor(){
      super();
      this.state={topPlaces:[]
      }
      this.Signout=this.Signout.bind(this);
    };
    Signout(){

      localStorage.clear();
      window.location.replace('/');
    }
render(){
  const logedin=localStorage.getItem("access")==null ? <Link to="/authentication">
  <Button variant="outline-primary" className="navbarbutton" >ورود/ثبت نام</Button>
</Link> : <div><Link to="/profile">
  <Button variant="outline-primary" className="navbarbutton" >پروفایل</Button>
</Link>
<Button variant="outline-primary" className="navbarbutton" onClick={this.Signout}>خروج</Button></div>
  const beLeader = localStorage.getItem("access")!=null ?<NavLink href="/becomeLeader" className="navlink">!میخوام لیدر شم</NavLink>:null


return(
    <Navbar id = "header">
<SearchPlaceBar className="searchbar"/>
<NavbarBrand href="/" id="navbrand" >Home</NavbarBrand>
<Form inline>
  <Nav >
    <NavLink href="#ContactUs" className="navlink">ارتباط با ما</NavLink>
    <NavLink href="#AboutUs" className="navlink">درباره ما</NavLink>
    <NavLink href="/createNewPlace" className="navlink">اضافه کردن مکان</NavLink>
    {beLeader}
  </Nav>
  {logedin}
</Form>
</Navbar>
)
}
}
export default Header; 