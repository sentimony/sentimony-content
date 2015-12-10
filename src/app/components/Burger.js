import Radium from 'radium'
import React from 'react'
import { RaisedButton, LeftNav, MenuItem } from 'material-ui'

import Sidebar from './Sidebar';

class Burger extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 'navOpened' :  false };
  }

  render() {
    const navTransfrom = this.state.navOpened ? 0 : -300;
    return (
      <div style={ styles.burger }>

        <RaisedButton label="Burger"
          primary={true}
          onTouchTap={this._toggleLeftNav.bind(this)}/>

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
    )
  }


  _toggleLeftNav() {
    this.refs.leftNav.toggle();
  }
}

let styles = {
  burger: {
    marginBottom: '16px',
    display: 'block',

    '@media (min-width: 1054px)': {
      display: 'none',
    },
  }
}

module.exports = Radium(Burger)
