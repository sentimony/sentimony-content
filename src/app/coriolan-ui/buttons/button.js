import React from 'react'
import Radium from 'radium'
import Ink from 'react-ink'

class Button extends React.Component {
  render() {
    return (
      <a style={[ styles.button, this.props.style ]}>
        <span>{this.props.children}</span>
        <Ink/>
      </a>
    )
  }
}

const styles = {

  button: {
    position: 'relative',
    textTransform: 'uppercase',
    display: 'inline-block',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: '20px',
    boxSizing: 'border-box',
    height: '40px',
    lineHeight: '38px',
    padding: '0 22px',
    fontWeight: '500',
    transition: 'all .1s ease-in-out',
  },

}

module.exports = Radium(Button)
