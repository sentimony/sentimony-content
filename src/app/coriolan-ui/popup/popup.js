import React from 'react'
import Radium from 'radium'
import Modal from 'react-modal'

class Popup extends React.Component {

  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };
  }

  _openModal() {
    this.setState({
      modalIsOpen: true,
    });
  }

  _closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  render() {
    return (
      <div>
        <button onTouchTap={this._openModal.bind(this)}>
          {this.props.openPopupText}
        </button>

        <Modal
          style={customStyles}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this._closeModal.bind(this)}
          closeTimeoutMS={150}>

          <a style={styles.close} onTouchTap={this._closeModal.bind(this)}>
            <span className='icon-close'></span>
          </a>

          <header>

          </header>

          {this.props.children}

        </Modal>
      </div>
    )
  }
}

const styles = {

  close: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    width: '40px',
    height: '40px',
    lineHeight: '38px',
    textAlign: 'center',
    borderRadius: '20px',
    border: '1px solid #e6e6e6',
    boxSizing: 'border-box',
  },

}

const customStyles = {

  overlay : {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },

  content : {
    // position: 'absolute',
    top: '40px',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // border: '1px solid #ccc',
    // background: '#fff',
    // overflow: 'auto',
    // WebkitOverflowScrolling: 'touch',
    // borderRadius: '4px',
    // outline: 'none',
    // padding: '20px',
    // margin: 'auto',
    minWidth: '300px',
    boxSizing: 'border-box',
    transform: 'translateX(-50%)',
  }

}

module.exports = Radium(Popup)
