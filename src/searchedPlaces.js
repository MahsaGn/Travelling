import React from 'react'
import PlaceCard from './placeCard'
import axios from 'axios'
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
        axios.get(`http://127.0.0.1:8000/api/Places/UniquePlace/?search=${searchedVal}`)
    .then(json => {
      console.log("response")
      console.log(json.data)
      this.setState({info: json.data.map((d)=>{
          return <PlaceCard 
            title={d.title} 
            src="https://cdn.surfiran.com/wp-content/uploads/2016/12/Persepolis-1.jpg" 
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
                {this.state.info}
            </div>
        )
    }
}