import React from 'react'

import RegistrationPopup from './autorization/RegistrationPopup.jsx'
import PopupLog from './autorization/PopupLog.jsx'
import SidebarNav from './SidebarNav.jsx'

class Sidebar extends React.Component {
  render() {

    let containerStyle = {
      width: '300px',
      float: 'left',
      padding: '10px',
      boxSizing: 'border-box',
    }

    return (
      <div style={containerStyle}>

        <h2>Sidebar</h2>

        <RegistrationPopup />
        <PopupLog />

        <hr/>

        <SidebarNav />

      </div>
    )
  }
}

module.exports = Sidebar
