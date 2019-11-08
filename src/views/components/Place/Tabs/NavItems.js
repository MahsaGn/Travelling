import React from 'react'
import '../../../styles/style.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import 'bootstrap/dist/css/bootstrap.css';

class NavItems extends React.Component{
render()
{
    return(
        <Nav tabs id="tabs">
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.activeTab === '4' })}
            onClick={() => { this.props.toggle('4'); }}
          >
            نظرکاربران
          </NavLink>
        </NavItem>
        <NavItem >
          <NavLink
            className={classnames({ active: this.props.activeTab === '3' })}
            
            onClick={() => { this.props.toggle('3'); }}
          >
            تاریخچه
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.activeTab === '2' })}
            onClick={() => { this.props.toggle('2'); }}
          >
            لیدرها
          </NavLink>
        </NavItem>
        <NavItem >
          <NavLink
            className={classnames({ active: this.props.activeTab === '1' })}
            onClick={() => { this.props.toggle('1'); }}
          >
            اطلاعات
          </NavLink>
        </NavItem>
      </Nav>
    );
}
}
export default NavItems;