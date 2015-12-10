import Radium from 'radium'
import React from 'react'
import RetinaImage from 'react-retina-image'
import { Toggle } from 'material-ui';

import PopupReg from './PopupReg';
import PopupLog from './PopupLog';

class SidebarUser extends React.Component {
  render() {
    return (
      <div style={this.props.style}>
        <div style={styles.component}>
          <div style={styles.beforeStyle}></div>
          <div style={styles.imageContur}>
            <RetinaImage src={["./img/promo/motivation.png", "./img/promo/motivation@2x.png"]}
              alt="Promo Motivation" />
          </div>
          <div style={styles.textContainer}>
            <div style={styles.textSecondary}>Подарок</div>
            <div style={styles.textPrimary}>Зарегистрируйся и получи +1 000 рублей</div>
          </div>
          <div style={styles.afterStyle}></div>
        </div>
        <div style={styles.component}>
          <div style={styles.beforeStyle}></div>
          <PopupReg />
          <PopupLog />
          <div style={styles.afterStyle}></div>
        </div>
        <div>
          <Toggle
            name="toggleName2"
            value="toggleValue2"
            label="auto-pilot"
            defaultToggled={true}/>
        </div>
      </div>
    );
  }
}

let styles = {

  component: {
    marginBottom: '16px',
  },
  beforeStyle: {
    display: 'table',
  },
  afterStyle: {
    display: 'table',
    clear: 'both',
  },
  imageContur: {
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
    color: '#424242',
    fontSize: '16px',
  },
  textSecondary: {
    color: '#a7a7a7',
    fontSize: '12px',
    fontStyle: 'italic',
    fontFamily: "'PT Serif', serif",
  },
}

module.exports = Radium(SidebarUser)
