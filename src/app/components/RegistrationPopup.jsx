import React from 'react';

import { RaisedButton, Dialog, TextField } from 'material-ui';

const AutorizationPopup = React.createClass({

  render() {

    let autorizationActions = [
      <RaisedButton
        key={1}
        label="Отмена"
        secondary={true}
        onTouchTap={this._dismissPopup} />,

      <RaisedButton
        key={2}
        label="Войти"
        primary={true}
        onTouchTap={this._submitReg}
        style={{
          margin: '0 0 0 10px',
        }} />
    ];

    return (
      <span>

        <RaisedButton label="Вход" secondary={true} onTouchTap={this._showPopup} />

        <Dialog
          title="Вход"
          actions={autorizationActions}
          autoScrollBodyContent={true}
          contentStyle={{
            textAlign: 'center',
            maxWidth: '304px',
          }}
          ref="autorizationPopup" >

          <TextField
            fullWidth={true}
            floatingLabelText="Email"
            hintText="Введите Email" />

          <TextField
            fullWidth={true}
            floatingLabelText="Пароль"
            hintText="Введите Пароль" />

        </Dialog>

      </span>
    );
  },

  _showPopup() {
    this.refs.autorizationPopup._show();
  },

  _dismissPopup() {
    this.refs.autorizationPopup._dismiss();
  },

});

export default AutorizationPopup;
