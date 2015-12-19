import React from 'react'
// import ThemeManager from 'material-ui/lib/styles/theme-manager'
import VaBankRawTheme from '../styles/raw-themes/vabank-raw-theme'
import VaBankRawThemeManager from '../styles/vabank-theme-manager'

import Sidebar from './Sidebar';
import Wrap from './Wrap';

const PageMain = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getInitialState () {
    return {
      muiTheme: VaBankRawThemeManager.getMuiTheme(VaBankRawTheme),
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  render() {
    return (
      <div>
        <Sidebar />
        <Wrap>
          {this.props.children}
        </Wrap>
      </div>
    );
  },
});

module.exports = PageMain
