import React from 'react'
import Radium from 'radium'

import Button from './button'

class GhostButton extends React.Component {
  render() {
    return (
      <Button style={[ styles.ghostButton, this.props.style ]}>
        {this.props.children}
      </Button>
    )
  }
}

const styles = {

  ghostButton: {
    backgroundColor: 'transparent',
    color: '#727272',
    borderColor: '#727272',

    ':hover': {
      color: '#a7a7a7',
      borderColor: '#a7a7a7',
    },

    // ':active': {
    //   color: '#545454',
    //   borderColor: '#545454',
    // },
  },

}

module.exports = Radium(GhostButton)
