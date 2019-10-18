import React from 'react';
import {BrowserRouter as BrowserRouter, Route, Link} from "react-router-dom";
import Home from './becomeLeaderForm'
import Auth from './login_signupForm'
class App extends React.Component
{
  render(){
    return(
      <BrowserRouter> 
        <switch>
          <Route exact path='/' component={Home} exact />
          <Route path='/authentication' component={Auth}/>
        </switch>
      </BrowserRouter>
    )
  }
}

export default App;
