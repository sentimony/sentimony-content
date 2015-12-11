import Radium from 'radium'
import React from 'react'

import Burger from './Burger';
import WrapPresets from './WrapPresets';
import Widget1x1 from './Widget1x1';
import Widget2x1 from './Widget2x1';
import Widget3x1 from './Widget3x1';
import Widget3x1Full from './Widget3x1Full';

class Wrapper extends React.Component {
  render() {
    return (
      <div style={styles.wrapper}>

        <Burger />

        <div className='clearfix' style={styles.widgetContainer}>

          <Widget3x1 />
          <Widget1x1 />

        </div>

        <div className='clearfix' style={styles.widgetContainer}>

          <WrapPresets />

        </div>

        <div className='clearfix' style={styles.widgetContainer}>

          <Widget1x1 />
          <Widget1x1 />
          <Widget1x1 />
          <Widget1x1 />

          <Widget2x1 />
          <Widget2x1 />

          <Widget1x1 />
          <Widget3x1 />

        </div>

        <div className='clearfix' style={styles.widgetContainer}>

          <Widget3x1Full />

        </div>

      </div>
    )
  }
}

let styles = {
  wrapper: {
    display: 'block',
    padding: '16px',
    marginLeft: '0px',

    '@media (min-width: 1054px)': {
      marginLeft: '300px',
    },
  },
  widgetContainer: {
    margin: '0 -8px',
  }
}

module.exports = Radium(Wrapper)
