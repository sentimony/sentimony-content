'use strict';

import React from 'react';

import { RaisedButton, Dialog, TextField } from 'material-ui';

import Sidebar from './Sidebar.jsx';
import Wrapper from './Wrapper.jsx';

const GameHallPage = React.createClass({

  render() {

    return (
      <div>

        <h1>Game Hall Page</h1>

        <Sidebar />
        <Wrapper />

      </div>
    );
  },
});

export default GameHallPage;
