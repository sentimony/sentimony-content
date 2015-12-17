import Radium from 'radium'
import React from 'react'
import { FlatButton, LeftNav, MenuItem, SvgIcon } from 'material-ui'
import RetinaImage from 'react-retina-image'
import { IndexLink } from 'react-router'

import Sidebar from './Sidebar';

class WrapBurger extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 'navOpened' :  false };
  }

  render() {
    const navTransfrom = this.state.navOpened ? 0 : -300;
    return (
      <div style={styles.burger}>

        <div style={{flex: '.4 auto'}}>

          <FlatButton
            primary={true}
            label="Меню"
            labelPosition="after"
            labelStyle={{paddingLeft:'8px'}}
            onTouchTap={this._toggleLeftNav.bind(this)}>

            <SvgIcon style={styles.iconMenu}>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </SvgIcon>

          </FlatButton>

          <LeftNav ref="leftNav"
            onNavOpen={()=>this.setState({ navOpened : true })}
            onNavClose={()=>this.setState({ navOpened : false })}
            style={{ 
              width: '300px',
              transform: 'translate3d(' + navTransfrom + 'px, 0, 0)',
            }}
            docked={false} >

            <Sidebar style={{display: 'block '}}/>

          </LeftNav>

        </div>
        <div style={{flex: '3 0px', textAlign: 'center'}}>

          <IndexLink to="/">
            <RetinaImage src={["./img/brand/logo-mob.png", "./img/brand/logo-mob@2x.png"]} alt="Site Logo" style={styles.image} />
          </IndexLink>

        </div>
        <div style={{flex: '.4 auto', textAlign: 'right'}}>

        <FlatButton
          primary={true}
          label="Касса"
          labelStyle={{paddingLeft:'8px'}}
          labelPosition="after">

          <SvgIcon style={styles.iconWallet}>
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </SvgIcon>

        </FlatButton>

        </div>

      </div>
    )
  }

  _toggleLeftNav() {
    this.refs.leftNav.toggle();
  }
}

let styles = {

  burger: {
    marginBottom: '16px',
    // display: 'block',
    display: 'flex',
    flexFlow: 'row wrap',

    '@media (min-width: 1054px)': {
      display: 'none',
    },
  },

  iconMenu: {
    fill: '#f5a623',
    padding: '0 0 0 12px',
    marginTop: '-2px',
    verticalAlign: 'middle',
    lineHeight: '36px',
  },

  iconWallet: {
    fill: '#f5a623',
    padding: '0 0 0 12px',
    marginTop: '-2px',
    verticalAlign: 'middle',
    lineHeight: '36px',
  },


}

module.exports = Radium(WrapBurger)
