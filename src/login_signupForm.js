import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import 'bootstrap/dist/css/bootstrap.css';
import './login_signupForm.css';
import LoginForm from './loginForm';

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div id="login_signup">
    <Nav tabs id="login_signupForm">
      <NavItem>
        <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
        >ثبت نام</NavLink>
        </NavItem>
        <NavItem>
            <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
            >ورود</NavLink>
        </NavItem>
    </Nav>
    <TabContent id="auth_tab_content" activeTab={activeTab}>
        <TabPane tabId="1">
            <LoginForm/>        
        </TabPane>
        <TabPane tabId="2">
        </TabPane>
    </TabContent>
    </div>
  );
}

export default Example;
