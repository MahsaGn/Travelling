import React, { Profiler } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/pages/homePage";
import AddPlaceForLeader from "./views/pages/addPlaceForLeaderForm";
import Place from "./views/pages/Place";
import CreatePlaceForm from "./views/pages/createPlaceForm";
import SearchedPlaces from "./views/pages/searchedPlaces";
import Auth from "./views/pages/login_signupForm";
import Profile from "./views/pages/userProfile";

import leaderProfile from "./views/pages/leaderProfile";
import becomeLeaderForm from "./views/pages/becomeLeaderForm";
import { Provider } from "react-redux";
import store from "./store";
import Travelouge from "./views/components/travelougeCard";
import AddTravelogu from "./views/pages/addTravelogu";

const App = (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/addPlaceForLeaderForm"
        component={AddPlaceForLeader}
      />
      <Route path="/place/:id" component={Place} />
      <Route path="/addTravelogu" component={AddTravelogu} />
      <Route path="/places/:searchedVal" component={SearchedPlaces} />
      <Route path="/createNewPlace" component={CreatePlaceForm} />
      <Route path="/authentication" component={Auth} />
      <Route path="/becomeLeader" component={becomeLeaderForm} />
      <Route path="/profile" component={Profile} />
      <Route path="/leaderProfile" component={leaderProfile} />
      <Route path="/travelouge" component={Travelouge} />
    </BrowserRouter>
  </Provider>
);

export default App;
