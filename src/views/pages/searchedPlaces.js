import React from 'react'
import PlaceCard from '../components/placeCard'
import axios from 'axios'
import Header from '../components/header'
export default class searchedPlace extends React.Component{

    constructor(){
        super()
        this.state={
            info :""
        }
    }
    componentWillMount(){
        console.log("insearch")
        var searchedVal = window.location.pathname.split('/')[2]
        console.log(searchedVal)
        axios.get(`http://127.0.0.1:8000/api/Places/ViewPlace/?search=${searchedVal}`)
    .then(json => {
      console.log("response")
      console.log(json.data)
      this.setState({info: json.data.map((d)=>{
          return <PlaceCard 
            title={d.title} 
            src= {d.image1}
            discriptions={d.Discriptions}
            id={d.id}/>
      })})
      console.log(this.state.info)
    }).catch(
    console.log("error"));


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