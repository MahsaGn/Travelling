import React from 'react'
import './searchBar.css'
import { MDBCol, MDBIcon } from "mdbreact";

export default class searchPlace extends React.Component{
    constructor(){
        super();
        this.state={
            searchedVal:"",
        }
        this.handleSubmite=this.handleSubmite.bind(this);
        this.handleChange=this.handleChange.bind(this)
    }
    handleSubmite(e){
        return window.location.replace(`/places/${this.state.searchedVal}`)
    }

    handleChange(e){
        console.log(this.state.searchedVal)
        this.setState({
            searchedVal: e.target.value
        })
        console.log(this.state.searchedVal)
    }

    render(){
        return(
      <div className="input-group md-form form-sm form-1 pl-0 searchBar">
          <span className="input-group-text purple lighten-3 " id="basic-text1">
            <MDBIcon className="text-white" icon="search" />
          </span>
          <img onClick={this.handleSubmite} id="imgSearchBar" src="https://cdn2.iconfinder.com/data/icons/picons-basic-1/57/basic1-015_search_zoom_find-512.png"/>
        <input value={this.state.searchedVal} onChange={this.handleChange} className="searchItem" type="text" placeholder="Search" aria-label="Search" />
        </div>

            
        );
    }
}