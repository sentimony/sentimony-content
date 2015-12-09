import React from 'react'
import RetinaImage from 'react-retina-image'

let styles = {}

styles.image = {
  maxWidth: '180px',
  padding: '10px',
  boxSizing: 'border-box',
}

class Logo extends React.Component {

  render() {

    return (

      <div style={styles.component} >
        <a href="/" >
          <RetinaImage src={["./img/brand/site-logo.png", "./img/brand/site-logo@2x.png"]}
            alt="Site Logo"
            style={styles.image} />
        </a>
      </div>

    )
  }
}

module.exports = Logo
