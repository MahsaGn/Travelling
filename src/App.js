import React from 'react';
import {BrowserRouter as BrowserRouter, Route, Link} from "react-router-dom";
import Home from './home'
import Auth from './login_signupForm'
import becomeLeaderForm from './becomeLeaderForm';
class App extends React.Component
{
  render(){
    return(
      <BrowserRouter> 
        <switch>
          <Route exact path='/' component={Home} exact />
          <Route path='/authentication' component={Auth}/>
          <Route path='/becomeLeader' component={becomeLeaderForm}/>
        </switch>
      </BrowserRouter>
    )
  }
}

export default App;
