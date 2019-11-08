import React, { useState } from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';
import SortBar_navLink from '../components/sortBar_navLink'
import {connect} from 'react-redux'
import * as sortPlaceAction  from '../../core/sortPlace/sortPlace_action';


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
          <SortBar_navLink 
          activeTab={this.props.activeTab}
          number={1}
          toggle={this.props.toggle}
          option=""
          title="محبوب ترین"/>

          <SortBar_navLink 
          activeTab={this.props.activeTab}
          number={2}
          toggle={this.props.toggle}
          option=""
          title="زودترین زمان شروع"/>

          <SortBar_navLink 
          activeTab={this.props.activeTab}
          number={3}
          toggle={this.props.toggle}
          option=""
          title="دیرترین زمان پایان"/>

          <SortBar_navLink 
          activeTab={this.props.activeTab}
          number={4}
          toggle={this.props.toggle}
          option=""
          title="آسان ترین"/>

          <SortBar_navLink 
          activeTab={this.props.activeTab}
          number={5}
          toggle={this.props.toggle}
          option=""
          title="سخت ترین"/>

          <SortBar_navLink 
          activeTab={this.props.activeTab}
          number={6}
          toggle={this.props.toggle}
          option=""
          title="کوتاه ترین زمان بازدید"/>
      </Nav>
      
    </div>
  )}
}

const mapStateToProps = (state) => {
    
  return{
      sortedPlaceLoaded : state.sortPlace_reducer.searchedPlaceLoaded,
      info: state.sortPlace_reducer.places_info,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      sortPlace : (sorted_option) => dispatch(sortPlaceAction.sortPlace(sorted_option)),

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(sortBar);


