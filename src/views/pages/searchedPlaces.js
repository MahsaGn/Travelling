import React from 'react'
import PlaceCard from '../components/placeCard'
import {connect} from 'react-redux'
import Header from '../components/header'
import searchPlace from '../components/searchPlaceBar'
import * as searchedPlaceAction  from '../../core/searchedPlace/searchedPlace_action';
class searchedPlace extends React.Component{
    state={
        info:""
    }
    async componentWillMount(){
        var searchedVal = window.location.pathname.split('/')[2]
        console.log("in searchplace",searchedVal)
        await this.props.searchedPlace(searchedVal)
        if(this.props.searchedPlaceLoaded)
        {this.setState({info: this.props.info.map((d)=>{
            return <PlaceCard 
              title={d.title} 
              src= {d.image1}
              discriptions={this.props.Discriptions}
              id={d.id}/>
        })})}
        console.log("after await",this.props.info)
    }
    render(){
        
        return(
            <div>
                <Header/>
                {this.state.info}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    
    return{
        searchedPlaceLoaded : state.place_reducer.searchedPlaceLoaded,
        info: state.searchedPlace_reducer.places_info,
        searchedPlaceLoaded: state.searchedPlace_reducer.searchedPlaceLoaded
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
        searchedPlace : (searched_val) => dispatch(searchedPlaceAction.searchedPlace(searched_val)),

    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(searchedPlace);
  
  
  