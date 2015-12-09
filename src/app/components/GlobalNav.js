import React from 'react'

class GlobalNav extends React.Component {

  render() {

    return (
      
      <div style={this.props.style}>
        <ul>
          <li><a>Игровой зал</a></li>
          <li><a>Лотерея</a></li>
          <li><a>Турниры</a></li>
          <li><a>Акции</a></li>
          <li><a>Магазин фишек</a></li>
          <li><a>Новости</a></li>
          <li><a>Видео</a></li>
          <li><a>Скачать plug-in</a></li>
        </ul>
      </div>

    )
  }
}

module.exports = GlobalNav
