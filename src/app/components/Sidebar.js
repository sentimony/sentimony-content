import Radium from 'radium'
import React from 'react'

import SidebarLogo from './SidebarLogo';
import SidebarUser from './SidebarUser';
import SidebarNav from './SidebarNav';

class Sidebar extends React.Component {
  render() {
    return (

      <div style={ styles.sidebar }>
        <SidebarLogo style={[ styles.component, styles.divider ]} />
        <SidebarUser style={[ styles.component, styles.divider ]} />
        <SidebarNav style={ styles.component } />
      </div>

    )
  }
}

let styles = {
  sidebar: {
    position: 'fixed',
    width: '300px',
    float: 'left',
    padding: '16px',
    display: 'none',
    marginRight: '-100%',
    boxSizing: 'border-box',

    '@media (min-width: 1054px)': {
      display: 'block',
    }
  },
  component: {
    marginBottom: '16px',
  },
  divider: {
    paddingBottom: '16px',
    borderBottom: '1px solid #dbdbdb',
  }
}

module.exports = Radium(Sidebar)
