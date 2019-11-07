import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
        // <label id="sort_label">مرتب سازی براساس</label>
        // <ButtonGroup id="sort_button_group">
        //     <Button id="sort_button">محبوب ترین</Button>
        //     <Button id="sort_button">زودترین زمان شروع</Button>
        //     <Button id="sort_button">دیرترین زمان پایان</Button>
        //     <Button id="sort_button">آسان ترین</Button>
        //     <Button id="sort_button">سخت ترین</Button>
        //     <Button id="sort_button">کوتاه ترین زمان بازدید</Button>
        // </ButtonGroup>
  return (
    <div id="sorting_option">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            محبوب ترین
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            زودترین زمان شروع
          </NavLink>
        </NavItem>
        <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            محبوب ترین
          </NavLink>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
              دیرترین زمان پایان
          </NavLink>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
            آسان ترین
          </NavLink>
          <NavLink
            className={classnames({ active: activeTab === '6' })}
            onClick={() => { toggle('6'); }}
          >
        سخت ترین
          </NavLink>
          <NavLink
            className={classnames({ active: activeTab === '7' })}
            onClick={() => { toggle('7'); }}
          >
        کوتاه ترین زمان بازدید
          </NavLink>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane id="sort_option" tabId="1">
        </TabPane>
        <TabPane id="sort_option" tabId="2">
        </TabPane>
        <TabPane id="sort_option" tabId="3">
        </TabPane>
        <TabPane id="sort_option" tabId="4">
        </TabPane>
        <TabPane id="sort_option" tabId="5">
        </TabPane>
        <TabPane id="sort_option" tabId="6">
        </TabPane>
        <TabPane id="sort_option" tabId="7">
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Example;