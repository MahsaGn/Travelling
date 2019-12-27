import React from 'react'
import { ListGroup } from 'reactstrap';
import ItemPlace from './Item_Place'
import { connect } from 'react-redux'


class NavItem_info extends React.Component {

  render() {
    return (
      <ListGroup id="tab_content_info">
        <ItemPlace val={this.props.info.title} name="نام" />
        <ItemPlace val={this.props.info.categories} name="نوع مکان" />
        <ItemPlace val={this.props.info.Likes} name="میزان علاقه مندی" />
        <ItemPlace val={this.props.info.Hardness} name="میزان سختی" />
        <ItemPlace val={this.props.info.Average} name="متوسط زمان بازدید" />
        <ItemPlace val={this.props.info.Time} name="زمان" />
        <ItemPlace val={this.props.info.City} name="شهر" />
        <ItemPlace val={this.props.info.Address} name="نشانی" />
      </ListGroup>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    info: state.place_reducer.place_info
  }
}
export default connect(mapStateToProps)(NavItem_info);