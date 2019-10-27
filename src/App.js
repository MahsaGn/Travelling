import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './home'
import Place from './Place/Place'
import CreatePlaceForm from './createPlaceForm'
class App extends React.Component
{
  render(){
    return(
      <BrowserRouter> 
          <Route exact path='/' component={Home}/>
          <Route path='/place/:id' component={Place} />
          <Route path='/createNewPlace' component={CreatePlaceForm} />
      </BrowserRouter>
    )
  }
}

export default App;
