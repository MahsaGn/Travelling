import React from 'react'
import { NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import {connect} from 'react-redux'
import * as sortPlaceAction from '../../core/sortPlace/sortPlace_action'
import { format } from 'path';
import { async } from 'q';


class sortBar_navLik extends React.Component{
    constructor(props){
        super(props)
        this.sortPlace=this.sortPlace.bind(this)
    }
    sortPlace =async ()=>{
        localStorage.setItem("activeTab",this.props.number)
        localStorage.setItem("option",this.props.option)
        window.location.replace('/')
        //await this.props.toggle(this.props.number,this.props.option)
    }
    render(){
        console.log( this.props.activeTab,this.props.number )
        return(
        <NavItem>
            <NavLink
            className={classnames({ active: this.props.activeTab === this.props.number })}
            onClick={this.sortPlace}
            >
            {this.props.title}
          </NavLink>
        </NavItem>

        )
    }
}
const mapStateToProps = (state) => {
    
    return{
        activeTab : state.sortPlace_reducer.activeTab,
        sortPlace_option :state.sortPlace_reducer.sortPlace_option
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
        toggle : (activeTab,option) => dispatch(sortPlaceAction.sortPlace(activeTab,option)),
  
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(sortBar_navLik);
  
  
  