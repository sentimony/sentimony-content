import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import Main from './components/Main.jsx';
import HomePage from './components/HomePage.jsx';
import GameHallPage from './components/GameHallPage.jsx';

const AppRoutes = (
  <Route path="/" component={Main}>
    <Route path="home" component={HomePage} />
    <Route path="game-hall" component={GameHallPage} />
  </Route>
);

export default AppRoutes;
