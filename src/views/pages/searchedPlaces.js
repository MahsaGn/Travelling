import React from 'react'
import PlaceCard from '../components/placeCard'
import {connect} from 'react-redux'
import Header from '../components/header'
import { TabContent, TabPane,Button } from 'reactstrap';
import SortPlaceBar from '../components/sortBar'
import FilterBar from '../components/filterBar'
import '../styles/style.css'
import * as searchedPlaceAction  from '../../core/searchedPlace/searchedPlace_action';


class searchedPlace extends React.Component{

    constructor(props){
        super(props);
        this.state = 
        {
            info:"",
        };
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
                    info: placeCards
                }
            )
        }
        console.log("after await",this.props.info)
    }

    render(){
        return(
            <div>
                <Header/>
                <SortPlaceBar/>
                <br/>
                <br/>
                <div>
                    <div className="searching_option">
                        <FilterBar/>
                    </div>
                    <div>
                        <TabContent>
                            <TabContent/>
                                <TabPane id="sort_option">
                                    {this.state.info}
                                </TabPane>
                        </TabContent>
                    </div>
                </div>
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
        searchedPlace : (searched_val,activeTab,option) => dispatch(searchedPlaceAction.searchedPlace(searched_val,activeTab,option))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(searchedPlace);
  
  
  