import React from 'react'
import NavItem_info from './NavItem_info'
import 'bootstrap/dist/css/bootstrap.css';
import '../../style.css';
import NavItems from './NavItems'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import NavItem_leader from './NavItem_leader'
import { runInThisContext } from 'vm';
import NavItem_history from './NavItem_history'


 export default class Place_nav extends React.Component{
     constructor(){
       super();
         
     }
     state = {
      activeTab: '1',
      palceData:[],
      hasToken: true,
      activePlace: []
    };
     toggle = (tab) => {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
  }
     render(){
         return(
             <div>
            <NavItems  activeTab ={this.state.activeTab} toggle={this.toggle}/>
            <TabContent id="tab_content" activeTab={this.state.activeTab} >
            <hr/>
              <TabPane tabId="1">
                <NavItem_info info={this.props.info}/>
              </TabPane>
              <TabPane tabId="2">
                <NavItem_leader/>
              </TabPane>
              <TabPane tabId="3">
                <NavItem_history info={this.props.info.Description}/>
              </TabPane>
            </TabContent>
          </div>
         );
     }
 }
