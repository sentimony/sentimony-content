import React from 'react'
import { render } from 'react-dom'
import Radium from 'radium'
import RetinaImage from 'react-retina-image'
import { ClearFix } from 'material-ui'

import Widget1x1 from './Widget1x1';
import Widget2x1 from './Widget2x1';

class PageProfile extends React.Component {
  render() {
    return (
      <div>
        <ClearFix style={styles.header}>
          <RetinaImage
            src={["./img/user/avatar-lg.png", "./img/user/avatar-lg@2x.png"]}
            alt="User Large Avatar"
            style={styles.avatar}/>
          <div style={styles.text}>
            <div style={{fontSize:'16px'}}>Профиль</div>
            <div style={{fontSize:'52px'}}>Вашингтон Джордж</div>
            <div>[ico] <span style={{opacity:'.5'}}>Secure ID: 2618274</span></div>
            <div style={{fontSize:'14px'}}>Выйти</div>
          </div>
        </ClearFix>

        <div>Уровень: Охотник за Удачей</div>
        <div>Персональные данные [ico]</div>

        <div>Статистика за Неделю Реальные деньги в любимых играх</div>

        <div>Задания</div>
        <div>Выполняй задания получай фишки</div>

        <div>Ваши любимые игры</div>
        <div>Игры в которые вы играли</div>

        <ClearFix style={styles.widgetContainer}>
          <Widget2x1 />
          <Widget1x1 />
          <Widget1x1 />
          <Widget1x1 />
        </ClearFix>
      </div>
    )
  }
}

let styles = {

  header: {
    color: '#fff',
    background: 'url(./img/user/bg.png) center no-repeat',
    backgroundSize: 'cover',
    borderRadius: '4px 4px 0 0',
    padding: '16px',
  },

  avatar: {
    marginTop: '-24px',
    float: 'left',
    marginRight: '16px',
  },

  text: {
    float: 'left',
  },

  widgetContainer: {
    margin: '0 -8px',
  },
}

module.exports = Radium(PageProfile)
