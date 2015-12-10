import Radium from 'radium'
import React from 'react'

class Widget3x1 extends React.Component {
  render() {
    return (
      <div style={ styles.widget3x1 }>

          <div style={styles.widgetContent}>Widget 3x1</div>

      </div>
    )
  }
}

let styles = {
  widget3x1: {
    width: '75%',
    boxSizing: 'border-box',
    padding: '0 8px 16px',
    float: 'left',

    '@media (min-width: 1054px)': {
    },
  },
  widgetContent: {
    backgroundColor: '#f5a623',
    color: 'white',
    padding: '16px',
    height: '100px',
  }
}

module.exports = Radium(Widget3x1)
