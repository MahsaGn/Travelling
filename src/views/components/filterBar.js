import React from 'react'
import PlaceCard from '../components/placeCard'
import {connect} from 'react-redux'
import Header from '../components/header'
import { TabContent, TabPane,Button } from 'reactstrap';
import SortPlaceBar from '../components/sortBar'
import '../styles/style.css'
import * as searchedPlaceAction  from '../../core/searchedPlace/searchedPlace_action';


class FilterBar extends React.Component{

    constructor(props){
        super(props);
        this.state = 
        {
            searchedVal:""
        };
        this.handleChange=this.handleChange.bind(this)
        this.onSearchClick=this.onSearchClick.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
    }

    async componentWillMount(){
        var searchedVal = this.props.searchedVal
        console.log("in searchplace",searchedVal)
        this.setState(
            {
                searchedVal:this.state.searchedVal
            }
        )
        console.log("after await",this.props.info)
    }

    async onSearchClick(){
        await this.props.setSearchVal(this.state.searchedVal)
        console.log("searched value is",this.props.searchedVal)
        window.location.replace(`/places/${this.props.searchedVal}`)
    }

    handleChange(e){
        this.setState(
            {
                searchedVal:e.target.value
            }
        )
    }

    handleEnter(e){
        console.log("here",e.key)
        if(e.key ==="Enter")
            this.onSearchClick(e)
    }

    render(){
        return(
            <div className="searching_option">
                <div className="searchBar_searchPlace">
                    <input className="search_input" onChange={this.handleChange} onKeyPress={this.handleEnter} value={this.state.searchedVal} type="text"/>
                    <Button className="search_button" onClick={this.onSearchClick}>جست و جو</Button>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return{
        searchedVal: state.searchedPlace_reducer.searchedPlace_val
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
        setSearchVal : (searched_val) => dispatch(searchedPlaceAction.setSearchVal(searched_val)),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(FilterBar);
  
  
  