import Radium from 'radium'
import React from 'react'

class Widget2x1 extends React.Component {
  render() {
    return (
      <div className="widget2x1" style={styles.widget2x1}>
        <img style={styles.imageRatio2x1} src='./img/widget/2x1.png'/>

        <div style={styles.widgetContent}>
          <div style={styles.widgetText}>
            <h3>Widget 2x1</h3>
            <p>bob@email.com secret</p>
          </div>
        </div>

      </div>
    )
  }
}

let styles = {
  widget2x1: {
    width: '100%',
    float: 'left',
    position: 'relative',

    '@media (min-width: 754px)': {
      width: '66.666666%',
    },

    '@media (min-width: 1300px)': {
      width: '50%',
    },
  },
  imageRatio2x1: {
    display: 'block',
    width: '100%',
    height: 'auto',
  },
  widgetContent: {
    backgroundColor: '#f5a623',
    position: 'absolute',
    top: '0px',
    left: '8px',
    right: '8px',
    bottom: '16px',
    padding: '8px',
    borderRadius: '4px',
    overflow: 'hidden',
    zIndex: '1',
  },
  widgetText: {
    backgroundColor: '#fff',
    width: '140px',
    position: 'absolute',
    top: '0px',
    left: '0px',
    bottom: '0',
    padding: '16px',
    boxSizing: 'border-box',

    '@media (min-width: 508px)': {
      width: '50%',
    },
  },
}

module.exports = Radium(Widget2x1)
