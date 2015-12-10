import Radium from 'radium'
import React from 'react'
import RetinaImage from 'react-retina-image'
import { Toggle, Badge, RaisedButton, FontIcon } from 'material-ui'

class SidebarUserInfo extends React.Component {
  render() {
    return (
      <div className="clearfix" style={this.props.style} >

        <div className="clearfix" style={{ marginBottom: '16px' }}>
          <div style={styles.imageContainer} >
            <RetinaImage src={["./img/user/avatar.png", "./img/user/avatar@2x.png"]}
              alt="User Avatar" />
          </div>

          <div style={styles.textContainer} >
            <span style={styles.userName} >Джордж Вашингтон</span>

            <Badge badgeContent={3} secondary={true} style={{ float: 'right' }}>
              <span>[ico]</span>
            </Badge>
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <span>Режим</span>
          <span style={{ float: 'right' }}>
            <span style={{ float: 'right', marginLeft: '8px' }}>Руб.</span>
            <span style={{ float: 'right' }}>
              <Toggle
                name="toggleMoneyRegime"
                value="toggleMoneyRegime"
                elementStyle={{ backgroundColor: 'red' }} />
            </span>
            <span style={{ float: 'right', color: '#a7a7a7' }}>Fun</span>
          </span>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <span>Баланс</span>
          <span style={{ float: 'right' }}>13 500 руб.</span>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <span>Баллы</span>
          <span style={{ float: 'right' }}>346</span>
        </div>

        <RaisedButton primary={true} label="Касса" labelPosition="after" >
          <span style={{ marginLeft: '16px', color: '#fff' }}>[ico]</span>
        </RaisedButton>

      </div>
    )
  }
}

let styles = {
  imageContainer: {
    float: 'left',
    maxWidth: '40px',
    marginRight: '-100%',
  },
  textContainer: {
    marginLeft: '40px',
    paddingLeft: '10px',
  },
  userName: {
    fontSize: '16px',
    lineHeight: '46px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    float: 'left',
    maxWidth: '155px',
    textOverflow: 'ellipsis',
  }
}

module.exports = Radium(SidebarUserInfo)
