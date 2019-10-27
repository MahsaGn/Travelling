import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './homePage'
import Place from './Place/Place'
import CreatePlaceForm from './createPlaceForm'
import SearchedPlaces from './searchedPlaces'
class App extends React.Component
{
  render(){
    return(
      <BrowserRouter> 
          <Route exact path='/' component={Home}/>
          <Route path='/place/:id' component={Place} />
          <Route path='/places/:searchedVal' component={SearchedPlaces} />
          <Route path='/createNewPlace' component={CreatePlaceForm} />
      </BrowserRouter>
    )
  }
}

export default App;

