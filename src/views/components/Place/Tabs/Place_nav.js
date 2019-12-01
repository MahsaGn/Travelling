import React from 'react'
import NavItem_info from './NavItem_info'
import 'bootstrap/dist/css/bootstrap.css';
import '../../../styles/style.css';
import NavItems from './NavItems'
import { TabContent, TabPane} from 'reactstrap';
import NavItem_leader from './NavItem_leader'
import NavItem_history from './NavItem_history'
import NavItem_travellouges from './navItem_travellouges'

class Place_nav extends React.Component{
     constructor(){
       super();
     this.state = {
      activeTab: '1',
    };
  }
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
            <NavItems  activeTab ={this.state.activeTab} toggle={this.toggle} />
            <TabContent id="tab_content" activeTab={this.state.activeTab} >
            <hr />
              <TabPane tabId="1">
                <NavItem_info/>
              </TabPane>
              <TabPane tabId="2">
                <NavItem_leader />
              </TabPane>
              <TabPane tabId="3">
                <NavItem_history/>
              </TabPane>
              <TabPane tabId="4">
                <NavItem_travellouges/>
              </TabPane>
            </TabContent>
          </div>
         );
     }
 }

export default Place_nav;

