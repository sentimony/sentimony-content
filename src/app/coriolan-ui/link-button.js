import React from 'react'
import Radium from 'radium'

import Button from './button'

class LinkButton extends React.Component {
  render() {
    return (
      <Button style={[ styles.linkButton, this.props.style ]}>
        {this.props.children}
      </Button>
    )
  }
}

const styles = {

  linkButton: {
    backgroundColor: 'transparent',
    color: '#f5a623',

    ':hover': {
      color: '#ffc668',
    },

    // ':active': {
    //   color: '#d68c11',
    // },
  },

}

module.exports = Radium(LinkButton)
