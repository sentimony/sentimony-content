import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { createHashHistory, createHistory, useBasename } from 'history'

import PageMain from './components/PageMain'
import PageIndex from './components/PageIndex'
import PageProfile from './components/PageProfile'
import PageGameHall from './components/PageGameHall'
import PageCoriolanUi from './components/PageCoriolanUi'

window.React = React;

injectTapEventPlugin();

const history = createHashHistory({
  queryKey: false
});

// const history = useBasename(createHistory)({
//   basename: '/'
// })

const selected = { color: '#f5a623' }

render((
  <Router history={history}>
    <Route path="/" component={PageMain}>
      <IndexRoute component={PageIndex}/>
      <Route path="/profile" component={PageProfile}/>
      <Route path="/game-hall" component={PageGameHall}/>
      <Route path="/coriolan-ui" component={PageCoriolanUi}/>
    </Route>
  </Router>
), document.getElementById('app'))

