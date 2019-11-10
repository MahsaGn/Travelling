
import React, { Profiler } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './views/pages/homePage'
import Place from './views/pages/Place'
import CreatePlaceForm from './views/pages/createPlaceForm'
import SearchedPlaces from './views/pages/searchedPlaces'
import Auth from './views/pages/login_signupForm'
import Profile from './views/pages/userProfile'
import becomeLeaderForm from './views/pages/becomeLeaderForm';
import {Provider} from 'react-redux'
import store from './store'

const App=(
      <Provider store={store}>
        <BrowserRouter> 
          <Route exact path='/' component={Home}/>
          <Route path='/place/:id' component={Place} />
          <Route path='/places/:searchedVal' component={SearchedPlaces} />
          <Route path='/createNewPlace' component={CreatePlaceForm} />
          <Route path='/authentication' component={Auth}/>
          <Route path='/becomeLeader' component={becomeLeaderForm}/>
          <Route path='/profile' component={Profile}/>
        </BrowserRouter>
      </Provider>
)

export default App;