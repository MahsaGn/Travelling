import React from 'react'
import { NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import {connect} from 'react-redux'
import * as sortPlaceAction from '../../core/sortPlace/sortPlace_action'
import { format } from 'path';

class sortBar_navLik extends React.Component{
    constructor(props){
        super(props)
        this.handleSort=this.handleSort.bind(this)
    }
    handleSort(){
        console.log("option is:",this.props.option)
    }
    render(){
        console.log(this.props.number,this.props.activeTab)
        return(
        <NavItem>
            <NavLink
            className={classnames({ active: this.props.activeTab === this.props.number })}
            onClick={() => { this.props.toggle(this.props.number); }}
            >
            {this.props.title}
          </NavLink>
        </NavItem>

        )
    }
}
const mapStateToProps = (state) => {
    
    return{
        activeTab : state.sortPlace_reducer.activeTab
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
        toggle : (activeTab) => dispatch(sortPlaceAction.change_activeTab(activeTab)),
  
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(sortBar_navLik);
  
  
  