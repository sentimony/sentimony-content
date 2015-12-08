import React from 'react'
import RetinaImage from 'react-retina-image'

class Sidebar extends React.Component {
  render() {

    let sidebarStyle = {
      width: '300px',
      padding: '10px 20px',
      boxSizing: 'border-box',
      float: 'left',
    }

    let componentStyle = {
      textAlign: 'center',
      borderBottom: '1px solid #999',
      margin: '0 0 20px',
    }

    let linkStyle = {
      margin: '10px auto 10px',
    }

    let imageStyle = {
      maxWidth: '180px',
      padding: '10px',
      boxSizing: 'border-box',
    }

    return (

      <aside className="sidebar" style={sidebarStyle} >

        <div style={componentStyle} >
          <a href="/" style={linkStyle}>
            <RetinaImage style={imageStyle} src={["./img/brand/site-logo.png", "./img/brand/site-logo@2x.png"]} alt="Site Logo" />
          </a>
        </div>

        <div>
          <a href="#">Регистрация</a>
          <a href="#">Вход</a>
        </div>

        <div>
          <ul>
            <li><a href="#">Игровой зал</a></li>
            <li><a href="#">Лотерея</a></li>
            <li><a href="#">Турниры</a></li>
            <li><a href="#">Акции</a></li>
            <li><a href="#">Магазин фишек</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Видео</a></li>
            <li><a href="#">Скачать plug-in</a></li>
          </ul>
        </div>

      </aside>

    )
  }
}

module.exports = Sidebar
