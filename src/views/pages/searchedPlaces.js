import React from 'react'
import PlaceCard from '../components/placeCard'
import {connect} from 'react-redux'
import Header from '../components/header'
import { TabContent, TabPane } from 'reactstrap';
import SortPlaceBar from '../components/sortBar'
import searchPlace from '../components/searchPlaceBar'
import * as searchedPlaceAction  from '../../core/searchedPlace/searchedPlace_action';
import { stat } from 'fs';
class searchedPlace extends React.Component{
    constructor(props){
        super(props);
        let activeTab = localStorage.getItem('activeTab')
        let option = localStorage.getItem('option')
        let searched = localStorage.getItem("searched")
      this.state = {
       activeTab:activeTab!=undefined ?activeTab:1,
       option:option!=undefined? option:"",
       info:"",
       searchedVal:searched!= undefined? searched:""

     };
     this.handleChange=this.handleChange.bind(this)
   }
    async componentWillMount(){
        var searchedVal = window.location.pathname.split('/')[2]
        console.log("in searchplace",searchedVal)
        await this.props.searchedPlace(searchedVal)
        if(this.props.searchedPlaceLoaded)
        {
            this.setState({info: this.props.info.map((d)=>{
            return <PlaceCard 
              title={d.title} 
              src= {d.image1}
              id={d.id}/>
        })})}
        console.log("after await",this.props.info)
    }
    onSearchClick(){
        localStorage.setItem("activeTab",this.props.activeTab)
        localStorage.setItem("option",this.props.option)
        localStorage.setItem("searched",this.state.searchedVal)
        console.log("foooooooooooooooooooooooooooooooo",window.location.href)
        window.location.replace(`${window.location.href}`)
    }

    handleChange(e){
        this.setState({
            searchedVal:e.target.value
        })
    }
    render(){
        
        return(
            <div>
                <Header/>
                <SortPlaceBar activeTab ={this.state.activeTab} toggle={this.toggle}/>
                <input  onChange={this.handleChange} value={this.state.searchedVal} type="text"/>
                <button onClick={this.onSearchClick}>جست و جو</button>
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
        activeTab:state.searchedPlace_reducer.activeTab
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
        searchedPlace : (searched_val,activeTab,option) => dispatch(searchedPlaceAction.searchedPlace(searched_val,activeTab,option)),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(searchedPlace);
  
  
  