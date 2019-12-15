import React from 'react';
import { Nav} from 'reactstrap';
import SortBar_navLink from '../components/sortBar_navLink'


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
          number="1"
          option="-Likes"
          title="محبوب ترین"/>

          <SortBar_navLink 
          number="2"
          option="-StartTime"
          title="زودترین زمان شروع"/>

          <SortBar_navLink 
          number="3"
          option="-EndTime"
          title="دیرترین زمان پایان"/>

          <SortBar_navLink 
          number="4"
          option="-Hardness"
          title="آسان ترین"/>

          <SortBar_navLink 
          number="5"
          option="Hardness"
          title="سخت ترین"/>

          <SortBar_navLink 
          number="6"
          option="-Time"
          title="کوتاه ترین زمان بازدید"/>

          <SortBar_navLink 
          number="7"
          option="title"
          title="حروف الفبا"/>
      </Nav>
      
    </div>
  )}
}
export default sortBar;


