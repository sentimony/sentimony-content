import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import AppRoutes from './app-routes.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createHistory from 'history/lib/createHashHistory';

window.React = React;

injectTapEventPlugin();

ReactDOM.render(
  <Router
    history={createHistory({queryKey: false})}
    onUpdate={() => window.scrollTo(0, 0)}
    >
    {AppRoutes}
  </Router>,
  document.getElementById('app')
);
