import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import '../styles/style.css';
import { Nav, NavLink, Navbar, Form, NavbarBrand } from 'reactstrap';
import * as sessionAction from '../../core/login/login_action'


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      topPlaces: []
    }
    this.Signout = this.Signout.bind(this);
  };

  Signout() {
    this.props.logout()
  }

  render() {
    const logedin = this.props.logged_in == false ?
      <NavLink href="/authentication" className="navlink">ورود/ ثبت نام</NavLink> : null;
    const guest = this.props.logged_in == true ?
      <NavLink href="/" className="navlink" onClick={this.Signout}>خروج</NavLink> : null;
    const profile = this.props.logged_in == true ?
      <NavLink href="/profile" className="navlink">پروفایل</NavLink>
      : null
    return (
      <Navbar id="header">
        <NavbarBrand href="/" id="navbrand" >
          <img className='header_home_img' src='home.png' />
        </NavbarBrand>
        <Form inline>
          <Nav >
            <NavLink href="#ContactUs" className="navlink">ارتباط با ما</NavLink>
            <NavLink href="#AboutUs" className="navlink">درباره ما</NavLink>
            {logedin}
            {profile}
            {guest}
          </Nav>

        </Form>
      </Navbar>
    )
  }
}

const mapsStateToProps = (state) => {
  return {
    logged_in: state.login_reducer.logged_in
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (login_info) => dispatch(sessionAction.logout(login_info))
  }
}
export default connect(mapsStateToProps, mapDispatchToProps)(Header);