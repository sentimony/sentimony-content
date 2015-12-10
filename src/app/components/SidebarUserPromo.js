import Radium from 'radium'
import React from 'react'
import RetinaImage from 'react-retina-image'

class SidebarUserPromo extends React.Component {
  render() {
    return (
      <div className="clearfix" style={this.props.style} >

        <div style={styles.imageContainer} >
          <RetinaImage src={["./img/promo/motivation.png", "./img/promo/motivation@2x.png"]}
            alt="Promo Motivation" />
        </div>

        <div style={styles.textContainer} >
          <div style={styles.textSecondary} >Подарок</div>
          <div style={styles.textPrimary} >Зарегистрируйся и получи +1 000 рублей</div>
        </div>

      </div>
    )
  }
}

let styles = {
  imageContainer: {
    float: 'left',
    borderRadius: '35px',
    maxWidth: '65px',
    overflow: 'hidden',
    marginRight: '-100%',
  },
  textContainer: {
    float: 'left',
    marginLeft: '65px',
    paddingLeft: '16px',
    minHeight: '65px',
  },
  textPrimary: {
    fontSize: '16px',
  },
  textSecondary: {
    color: '#a7a7a7',
    fontSize: '12px',
    fontStyle: 'italic',
    fontFamily: "'PT Serif', serif",
  },
}

module.exports = Radium(SidebarUserPromo)
