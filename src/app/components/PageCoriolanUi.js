import React from 'react'
import Radium from 'radium'

import PrimaryButton from './../coriolan-ui/primary-button'
import GhostButton from './../coriolan-ui/ghost-button'
import LinkButton from './../coriolan-ui/link-button'

class PageCoriolanUi extends React.Component {
  render() {
    return (
      <div>
        <PrimaryButton style={{ marginRight:'10px' }}>Primary Button</PrimaryButton>

        <GhostButton style={{ marginRight:'10px' }}>Ghost Button</GhostButton>
        <LinkButton>Link Button</LinkButton>

        <br/>
        <br/>

        <PrimaryButton style={{ marginRight:'10px' }}>
          <span className='icon-wallet icon-at-button'></span>
          Icon Primary
        </PrimaryButton>

        <GhostButton style={{ marginRight:'10px' }}>
          <span className='icon-verified-user icon-at-button'></span>
          Icon Ghost
        </GhostButton>

        <LinkButton>
          <span className='icon-menu icon-at-button'></span>
          Icon Link
        </LinkButton>
      </div>
    )
  }
}

let styles = {
}

module.exports = Radium(PageCoriolanUi)
