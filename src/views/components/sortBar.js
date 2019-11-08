import React, { useState } from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';

class sortBar extends React.Component {
  constructor(props){
    super(props)
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
        render(){
  return (
    <div id="sorting_option">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.activeTab === '1' })}
            onClick={() => { this.props.toggle('1'); }}
          >
            محبوب ترین
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.activeTab === '2' })}
            onClick={() => { this.props.toggle('2'); }}
          >
            زودترین زمان شروع
          </NavLink>
        </NavItem>
        <NavLink
            className={classnames({ active: this.props.activeTab === '3' })}
            onClick={() => { this.props.toggle('3'); }}
          >
            محبوب ترین
          </NavLink>
          <NavLink
            className={classnames({ active: this.props.activeTab === '4' })}
            onClick={() => { this.props.toggle('4'); }}
          >
              دیرترین زمان پایان
          </NavLink>
          <NavLink
            className={classnames({ active: this.props.activeTab === '5' })}
            onClick={() => { this.props.toggle('5'); }}
          >
            آسان ترین
          </NavLink>
          <NavLink
            className={classnames({ active: this.props.activeTab === '6' })}
            onClick={() => { this.props.toggle('6'); }}
          >
        سخت ترین
          </NavLink>
          <NavLink
            className={classnames({ active: this.props.activeTab === '7' })}
            onClick={() => { this.props.toggle('7'); }}
          >
        کوتاه ترین زمان بازدید
          </NavLink>
      </Nav>
      
    </div>
  )}
}

export default sortBar;