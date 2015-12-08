import React from 'react'
import Modal from 'react-modal'

const Logo = require('./components/Logo');
const User = require('./components/User');
const GlobalNav = require('./components/GlobalNav');

class Sidebar extends React.Component {

  render() {

    let sidebarStyle = {
      width: '300px',
      padding: '10px 20px',
      boxSizing: 'border-box',
      float: 'left',
    }

    let componentStyle = {
      textAlign: 'center',
      padding: '10px',
      borderBottom: '1px solid #999',
      margin: '0 0 10px',
    }

    return (

      <aside style={sidebarStyle} >

        <Logo style={componentStyle} />

        <User style={componentStyle} />

        <GlobalNav style={componentStyle} />

      </aside>

    )
  }
}

module.exports = Sidebar;

