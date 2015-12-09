import React from 'react';

const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');

import Logo from './Logo';
import PopupReg from './PopupReg';
import PopupLog from './PopupLog';
import GlobalNav from './GlobalNav';
import Button from './Button';

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
        <aside>
          <Logo />
          <PopupReg />
          <PopupLog />
          <GlobalNav />
        </aside>
        <main>
          <Button />
        </main>
      </div>

    );
  },
});

module.exports = Main
