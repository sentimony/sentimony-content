import Radium from 'radium'
import React from 'react'

class Widget1x1 extends React.Component {
  render() {
    return (
      <div style={styles.widget2x1}>

          <div style={styles.widgetContent}>Widget 1x1</div>

      </div>
    )
  }
}

let styles = {
  widget2x1: {
    width: '25%',
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

module.exports = Radium(Widget1x1)
