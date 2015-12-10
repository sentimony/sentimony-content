import Radium from 'radium'
import React from 'react'

import PopupReg from './PopupReg';
import PopupLog from './PopupLog';

class SidebarUserAutorize extends React.Component {
  render() {
    return (
      <div className="clearfix" style={this.props.style} >

        <PopupReg />
        <PopupLog />

      </div>
    )
  }
}

let styles = {
}

module.exports = Radium(SidebarUserAutorize)
