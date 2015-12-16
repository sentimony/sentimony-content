import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { createHistory, useBasename } from 'history'

import Index from './components/Index'
import Profile from './components/Profile'
import GameHall from './components/GameHall'
import Sidebar from './components/Sidebar'
import Wrapper from './components/Wrapper'

const selected = { color: '#f5a623' }

const history = useBasename(createHistory)({
  basename: '/'
})

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><IndexLink to="/" activeStyle={selected}>home</IndexLink></li>
          <li><Link to="/profile" activeStyle={selected}>profile</Link></li>
          <li><Link to="/game-hall" activeStyle={selected}>game hall</Link></li>
        </ul>

        <Sidebar/>

        <Wrapper>
          {this.props.children}
        </Wrapper>

      </div>
    )
  }
}

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/game-hall" component={GameHall}/>
    </Route>
  </Router>
), document.getElementById('app'))

