import React from 'react';
import {BrowserRouter as BrowserRouter, Route, Link} from "react-router-dom";
import Auth from './login_signupForm'
import leaderProfile from './leaderProfile';
class App extends React.Component
{
  render(){
    return(
      <BrowserRouter> 
        <switch>
          <Route path='/' component={Auth} exact/>
          <Route path='/leaderProfile' component={leaderProfile}/>
        </switch>
      </BrowserRouter>
    )
  }
}

export default App;