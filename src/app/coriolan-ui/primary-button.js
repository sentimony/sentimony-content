import React from 'react'
import Radium from 'radium'

import Button from './button'

class PrimaryButton extends React.Component {
  render() {
    return (
      <Button style={[ styles.primaryButton, this.props.style ]}>
        {this.props.children}
      </Button>
    )
  }
}

const styles = {

  primaryButton: {
    backgroundColor: '#f5a623',
    color: '#fff',

    ':hover': {
      backgroundColor: '#ffc668',
    },

    // ':active': {
    //   backgroundColor: '#d68c11',
    // },
  },
}

module.exports = Radium(PrimaryButton)
