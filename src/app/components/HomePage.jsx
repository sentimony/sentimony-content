'use strict';

import React from 'react';

import { RaisedButton, Dialog, TextField } from 'material-ui';

import Sidebar from './Sidebar.jsx';
import Wrapper from './Wrapper.jsx';

const HomePage = React.createClass({

  render() {

    return (
      <div>

        <h1>Home Page</h1>

        <Sidebar />
        <Wrapper />

      </div>
    );
  },
});

export default HomePage;
