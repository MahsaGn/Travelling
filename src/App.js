import React, { Profiler } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './home'
import Place from './Place/Place'
import CreatePlaceForm from './createPlaceForm'
import SearchedPlaces from './searchedPlaces'
import Auth from './login_signupForm'
import Profile from './userProfile'
import becomeLeaderForm from './becomeLeaderForm';
class App extends React.Component
{
  render(){
    return(
      <BrowserRouter> 
          <Route exact path='/' component={Home}/>
          <Route path='/place/:id' component={Place} />
          <Route path='/places/:searchedVal' component={SearchedPlaces} />
          <Route path='/createNewPlace' component={CreatePlaceForm} />
          <Route path='/authentication' component={Auth}/>
          <Route path='/becomeLeader' component={becomeLeaderForm}/>
          <Route path='/profile' component={Profile}/>
      </BrowserRouter>
    )
  }
}

export default App;

