import React from 'react';
import {BrowserRouter as BrowserRouter, Route, Link} from "react-router-dom";
import Home from './home'
import Place from './Place/Place'
class App extends React.Component
{
  render(){
    return(
      <BrowserRouter> 
        <switch>
          <Route exact path='/' component={Home} exact />
          <Route path='/place/:id' component={Place} />
        </switch>
      </BrowserRouter>
    )
  }
}

export default App;
