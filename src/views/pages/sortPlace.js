import React from 'react'
import PlaceCard from '../components/placeCard'
import {connect} from 'react-redux'
import Header from '../components/header'
import { TabContent, TabPane } from 'reactstrap';
import SortPlaceBar from '../components/sortBar'
import * as sortPlaceAction from '../../core/sortPlace/sortPlace_action'

import { stat } from 'fs';
class sortPlace extends React.Component{
    constructor(props){
        super(props);
        let activeTab = localStorage.getItem('activeTab')
        let option = localStorage.getItem('option')
      this.state = {
       activeTab:activeTab!=undefined ?activeTab:1,
       option:option!=undefined? option:"",
       info:""
     };
   }
    async componentWillMount(){
        var sortedOptoin = window.location.pathname.split('/')[2]
        console.log("in sortedplace",sortedOptoin)
        await this.props.sortPlace(this.state.activeTab,this.state.option)
        if(this.props.sortedPlaceLoaded)
        {
            console.log("before map in sort place")
            this.setState({
                info: this.props.info.map((d)=>{
                    return <PlaceCard 
                    title={d.title} 
                    src= {d.image1}
                    id={d.id}/>
                })
            })
        }
        console.log("after await",this.props.info)
    }
       
    render(){
        console.log("in sprt place datas are:",this.props.info)
        console.log("active tab is",this.state.activeTab)
        return(
            <div>
                <Header/>
                <SortPlaceBar activeTab ={this.state.activeTab} toggle={this.toggle}/>
                <TabContent activeTab={this.state.activeTab}>
                    <TabContent tabId={this.state.activeTab}/>
                    <TabPane id="sort_option" tabId={this.state.activeTab}>
                        {this.state.places_info}
                    </TabPane>
                </TabContent>
                {this.state.info}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    
    return{
        sortedPlaceLoaded : state.sortPlace_reducer.sortedPlaceLoaded,
        info: state.sortPlace_reducer.places_info,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return{
        sortPlace : (activeTab,option) => dispatch(sortPlaceAction.sortPlace(activeTab,option)),
  
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(sortPlace);
  
  
  