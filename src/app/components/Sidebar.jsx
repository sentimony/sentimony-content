'use strict';

import React from 'react';

import RegistrationPopup from './autorization/RegistrationPopup.jsx';
import LoginPopup from './autorization/LoginPopup.jsx';
import SidebarNav from './SidebarNav.jsx';

const Sidebar = React.createClass({

  render() {

    let containerStyle = {
      width: '300px',
      float: 'left',
      padding: '10px',
      boxSizing: 'border-box',
    };

    return (
      <div style={containerStyle}>

        <h2>Sidebar</h2>

        <RegistrationPopup />
        <LoginPopup />

        <hr/>

        <SidebarNav />

      </div>
    );
  },
});

export default Sidebar;
