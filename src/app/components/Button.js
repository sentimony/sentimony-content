import Radium from 'radium'
import React from 'react'

class Button extends React.Component {
  render() {
    return (
      <button
        style={[
          styles.base
        ]}>
        Cool Button!
      </button>
    );
  }
}

var styles = {
  base: {
    background: 'blue',
    border: 0,
    borderRadius: 4,
    color: 'white',
    padding: '1.5em',
    width: '100%',

    '@media (min-width: 320px)': {
      width: 'auto'
    },

    ':hover': {
      backgroundColor: 'red'
    }
  }
};

module.exports = Radium(Button);
