import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {connect} from 'react-redux'
import '../styles/homePage.css';
import SearchPlaceBar from '../components/searchPlaceBar';
import { Button ,Nav, NavLink, Navbar, Form, NavbarBrand } from 'reactstrap';
import {Link} from 'react-router-dom';
import * as sessionAction from '../../core/login/login_action'

class Header extends React.Component {
    constructor(props){
      super(props);
      this.state={
        topPlaces:[]
      }
      this.Signout=this.Signout.bind(this);
    };
    Signout(){

      this.props.logout()
      window.location.replace('/');
    }
render(){
  console.log("in headeeeeeeeeer",this.props.logged_in)
  console.log(localStorage.getItem('access'));
  const logedin=this.props.logged_in==false ? <Link to="/authentication">
  <Button variant="outline-primary" className="navbarbutton" >ورود/ثبت نام</Button>
</Link> : <div><Link to="/profile">
  <Link to="/AddPlaceForLeader"/>
  <Button variant="outline-primary" className="navbarbutton" >پروفایل</Button>
</Link>
<Button variant="outline-primary" className="navbarbutton" onClick={this.Signout}>خروج</Button></div>
  const beLeader = this.props.logged_in!=false ?<NavLink href="/becomeLeader" className="navlink">!میخوام لیدر شم</NavLink>:null


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
const mapsStateToProps = (state) =>({
  logged_in: state.login_reducer.logged_in
});
const mapDispatchToProps = (dispatch) => {
  return{
      logout : (login_info) => dispatch(sessionAction.logout(login_info))
  }
}

export default connect(mapsStateToProps,mapDispatchToProps)(Header);