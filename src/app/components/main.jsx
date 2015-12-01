'use strict';

import React from 'react';

import { RaisedButton, Dialog, TextField } from 'material-ui';

import HomePage from './HomePage.jsx';

const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');

const Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getInitialState () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      primary1Color: Colors.grey400,
      accent1Color: Colors.amber500
    });

    this.setState({muiTheme: newMuiTheme});
  },

  render() {

    return (
      <div>
        <HomePage />
      </div>
    );
  },
});

export default Main;
