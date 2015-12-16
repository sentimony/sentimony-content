import Radium from 'radium'
import React from 'react'
import { Link } from 'react-router'

const selected = { color: '#f5a623' }

class SidebarNav extends React.Component {
  render() {
    return (
      <div style={this.props.style}>

        <ul style={styles.ul}>
          <li style={styles.li}><Link to="/game-hall" style={styles.a} activeStyle={selected}>Игровой зал</Link></li>
          <li style={styles.li}><a style={styles.a}>Лотерея</a></li>
          <li style={styles.li}><a style={styles.a}>Турниры</a></li>
          <li style={styles.li}><a style={styles.a}>Акции</a></li>
          <li style={styles.li}><a style={styles.a}>Магазин фишек</a></li>
          <li style={styles.li}><a style={styles.a}>Новости</a></li>
          <li style={styles.li}><a style={styles.a}>Видео</a></li>
          <li style={styles.li}><a style={styles.a}>Скачать plug-in</a></li>
        </ul>
        
      </div>
    )
  }
}

let styles = {
  ul: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  li: {
  },
  a: {
    display: 'block',
    lineHeight: '45px',
  }
}

module.exports = Radium(SidebarNav)
