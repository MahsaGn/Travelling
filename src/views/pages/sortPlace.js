import React from 'react'
import PlaceCard from '../components/placeCard'
import {connect} from 'react-redux'
import Header from '../components/header'
import { TabContent, TabPane } from 'reactstrap';
import SortPlaceBar from '../components/sortBar'
import { stat } from 'fs';
class sortPlace extends React.Component{
    constructor(props){
        super(props);
        let activeTab = localStorage.getItem('activeTab')

      this.state = {
       activeTab:activeTab?activeTab:1,
       info:""
     };
   }
    toggle = (tab) => {
       if (this.state.activeTab !== tab) {
         this.setState({
           activeTab: tab
         });
       }
       console.log("active tab is",this.state.activeTab)
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
        sortedPlaceLoaded : state.sortPlace_reducer.searchedPlaceLoaded,
        info: state.sortPlace_reducer.places_info,
    }
  }
  
  export default connect(mapStateToProps)(sortPlace);
  
  
  