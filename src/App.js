import React from 'react';
import {BrowserRouter as BrowserRouter, Route, Link} from "react-router-dom";
import Auth from './login_signupForm'
import leaderProfile from './profile/leaderProfile/leaderProfile';
import Home from './home'
import Place from './Place/Place'
import CreatePlaceForm from './createPlaceForm'
import SearchedPlaces from './searchedPlaces'
import Profile from './profile/userProfile'
import becomeLeaderForm from './becomeLeaderForm';
class App extends React.Component
{
  render(){
    return(
      <BrowserRouter> 
          <Route path='/' component={Home} exact/>
          <Route path='/leaderProfile' component={leaderProfile}/>
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

