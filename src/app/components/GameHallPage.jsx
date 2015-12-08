'use strict';

import React from 'react';

import { RaisedButton, Dialog, TextField } from 'material-ui';

import Sidebar from './SidebarNew.jsx';
import Wrapper from './WrapperNew.jsx';

const GameHallPage = React.createClass({

  render() {

    return (

      <div>
        <Sidebar />
        <Wrapper />
      </div>

    );
  },
});

export default GameHallPage;
