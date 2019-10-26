import React from 'react'
import './searchBar.css'
import { MDBCol, MDBIcon } from "mdbreact";

export default class searchPlace extends React.Component{
    constructor(){
        super();
        this.state={
            searchedVal:"",
            places:""
        }
    }
    handleSubmite(){

    }
    render(){
        return(
      <div className="input-group md-form form-sm form-1 pl-0 searchBar">
          <span className="input-group-text purple lighten-3 " id="basic-text1">
            <MDBIcon className="text-white" icon="search" />
          </span>
          <img id="imgSearchBar" src="https://cdn2.iconfinder.com/data/icons/picons-basic-1/57/basic1-015_search_zoom_find-512.png"/>
        <input className="searchItem" type="text" placeholder="Search" aria-label="Search" />
        </div>

            
        );
    }
}