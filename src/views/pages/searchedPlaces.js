import React from 'react'
import PlaceCard from '../components/placeCard'
import {connect} from 'react-redux'
import Header from '../components/header'
import { TabContent, TabPane,Button } from 'reactstrap';
import SortPlaceBar from '../components/sortBar'
import '../styles/style.css'
import * as searchedPlaceAction  from '../../core/searchedPlace/searchedPlace_action';


class searchedPlace extends React.Component{

    constructor(props){
        super(props);
        this.state = 
        {
            info:"",
            searchedVal:""
        };
        this.handleChange=this.handleChange.bind(this)
        this.onSearchClick=this.onSearchClick.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
    }

    async componentWillMount(){
        var searchedVal = this.props.searchedVal
        console.log("in searchplace",searchedVal)
        let activeTab = this.props.activeTab
        let option = this.props.option
        await this.props.toggle(activeTab,option)
        await this.props.searchedPlace(searchedVal)
        console.log(this.props.activeTab)
        if(this.props.searchedPlaceLoaded)
        {
            let placeCards = this.props.info.map(
                (d)=>
                {
                    return <PlaceCard 
                    title={d.title} 
                    src= {d.image1}
                    id={d.id}/>
                }
            )
            this.setState(
                {
                    searchedVal:this.state.searchedVal,
                    info: placeCards
                }
            )
        }
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
            <div>
                <Header/>
                <div className="searching_option">
                    <SortPlaceBar/>
                    <div className="searchBar_searchPlace">
                        <input className="search_input" onChange={this.handleChange} onKeyPress={this.handleEnter} value={this.state.searchedVal} type="text"/>
                        <Button className="search_button" onClick={this.onSearchClick}>جست و جو</Button>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <TabContent activeTab={this.state.activeTab}>
                    <TabContent tabId={this.state.activeTab}/>
                    <TabPane id="sort_option" tabId={this.state.activeTab}>
                        {this.state.info}
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        searchedPlaceLoaded : state.searchedPlace_reducer.searchedPlaceLoaded,
        info: state.searchedPlace_reducer.places_info,
        option: state.searchedPlace_reducer.sortPlace_option,
        activeTab:state.searchedPlace_reducer.activeTab,
        searchedVal: state.searchedPlace_reducer.searchedPlace_val
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
        toggle : (activeTab,option) => dispatch(searchedPlaceAction.change_navTab(activeTab,option)),
        searchedPlace : (searched_val,activeTab,option) => dispatch(searchedPlaceAction.searchedPlace(searched_val,activeTab,option)),
        setSearchVal : (searched_val) => dispatch(searchedPlaceAction.setSearchVal(searched_val)),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(searchedPlace);
  
  
  