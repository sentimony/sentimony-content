/** In this file, we create a React component which incorporates components provided by material-ui */

import React from 'react';

import { RaisedButton, Dialog, TextField } from 'material-ui';

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
      textAlign: 'center',
      paddingTop: '200px'
    };

    let regActions = [
      <RaisedButton
        key={1}
        label="Отмена"
        secondary={true}
        onTouchTap={this._closeRegPopup} />,
      <RaisedButton
        key={2}
        label="Войти"
        primary={true}
        onTouchTap={this._submitReg} />
    ];

    let logActions = [
      <RaisedButton
        key={1}
        label="Отмена"
        secondary={true}
        onTouchTap={this._closeLogPopup} />,
      <RaisedButton
        key={2}
        label="Войти"
        primary={true}
        onTouchTap={this._submitLog} />
    ];

    return (
      <div style={containerStyle}>
        <Dialog
          title="Быстрая регистрация"
          actions={regActions}
          ref="regPopup"
          >
          <TextField
            hintText="Введите Email" />
          <TextField
            hintText="Придумайте пароль" />
        </Dialog>

        <Dialog
          title="Вход"
          actions={logActions}
          ref="logPopup"
          >
          <TextField
            hintText="Введите Email" />
          <TextField
            hintText="Пароль" />
        </Dialog>

        <RaisedButton label="Регистрация" primary={true} onTouchTap={this._openRegPopup} />
        <RaisedButton label="Вход" secondary={true} onTouchTap={this._openLogPopup} />

      </div>
    );
  },

  _openRegPopup() {
    this.refs.regPopup._show();
  },

  _openLogPopup() {
    this.refs.logPopup._show();
  },

  _closeRegPopup() {
    this.refs.regPopup._dismiss();
  },

  _closeLogPopup() {
    this.refs.logPopup._dismiss();
  }

});

export default Main;
