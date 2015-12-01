/** In this file, we create a React component which incorporates components provided by material-ui */

import React from 'react';

import { RaisedButton, Dialog, TextField } from 'material-ui';

import RegistrationPopup from './autorization/RegistrationPopup.jsx';
import LoginPopup from './autorization/LoginPopup.jsx';

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

    let containerStyle = {
      paddingTop: '200px',
      paddingBottom: '200px',
    };

    return (
      <div style={containerStyle}>

        <RegistrationPopup />
        <LoginPopup />

      </div>
    );
  },
});

export default Main;
