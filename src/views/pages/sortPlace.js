import React from 'react'
import PlaceCard from '../components/placeCard'
import {connect} from 'react-redux'
import Header from '../components/header'
import { TabContent, TabPane } from 'reactstrap';
import SortPlaceBar from '../components/sortBar'
import * as sortPlaceAction  from '../../core/sortPlace/sortPlace_action';
class sortPlace extends React.Component{
    constructor(){
        super();
      this.state = {
       activeTab: '1',
       info:""
     };
   }
    toggle = (tab) => {
       if (this.state.activeTab !== tab) {
         this.setState({
           activeTab: tab
         });
       }
   }
    async componentWillMount(){
        var sortedOptoin = window.location.pathname.split('/')[2]
        console.log("in sortedplace",sortedOptoin)
        //await this.props.sortPlace(sortedOptoin)
        if(this.props.sortedPlaceLoaded)
        {
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
        return(
            <div>
                <Header/>
                <SortPlaceBar activeTab ={this.state.activeTab} toggle={this.toggle}/>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane id="sort_option" tabId="1">
                    </TabPane>
                    <TabPane id="sort_option" tabId="2">
                    </TabPane>
                    <TabPane id="sort_option" tabId="3">
                    </TabPane>
                    <TabPane id="sort_option" tabId="4">
                    </TabPane>
                    <TabPane id="sort_option" tabId="5">
                    </TabPane>
                    <TabPane id="sort_option" tabId="6">
                    </TabPane>
                    <TabPane id="sort_option" tabId="7">
                    </TabPane>
                </TabContent>
                {this.state.info}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    
    return{
        sortedPlaceLoaded : state.place_reducer.searchedPlaceLoaded,
        info: state.searchedPlace_reducer.places_info,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
        sortPlace : (sorted_option) => dispatch(sortPlaceAction.sortPlace(sorted_option)),

    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(sortPlace);
  
  
  