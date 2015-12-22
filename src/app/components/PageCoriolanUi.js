import React from 'react'
import Radium from 'radium'

import { PrimaryButton, GhostButton, LinkButton, Popup } from './../coriolan-ui'

class PageCoriolanUi extends React.Component {
  render() {
    return (
      <div>

        <h2>Buttons:</h2>
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

        <br/>
        <br/>

        <h2>SVG Icons:</h2>
        <div>
          <span className='icon-expand-less'></span>
          <span className='icon-expand-more'></span>
          <span className='icon-arrow-forward'></span>
          <span className='icon-lock'></span>
          <span className='icon-close'></span>
          <span className='icon-menu'></span>
          <span className='icon-wallet'></span>
          <span className='icon-comment'></span>
          <span className='icon-verified-user'></span>
        </div>

        <br/>
        <br/>

        <h2>Popup:</h2>
        <Popup openPopupText='Open Popupsssss'>
          <h1>Modal Content</h1>
          <p>siijsfgjksdnjgnsjkgn</p>
        </Popup>

      </div>
    )
  }
}

let styles = {
}

module.exports = Radium(PageCoriolanUi)
