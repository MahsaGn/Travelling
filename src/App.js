
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import SearchBar from './searchPlaceBar'
import SearchedPlaces from './searchedPlaces'
class App extends React.Component
{
  render(){
    return(
      <BrowserRouter> 
          <Route exact path='/' component={SearchBar}/>
          <Route path='/places/:searchedVal' component={SearchedPlaces} />
      </BrowserRouter>
    )
  }
}

export default App;