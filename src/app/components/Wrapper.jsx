import React from 'react';

const WrapperNew = React.createClass({

  render() {

    let containerStyle = {
      float: 'left',
      padding: '10px',
      boxSizing: 'border-box',
    };

    return (
      <div style={containerStyle}>

        <h2>Wrapper</h2>

      </div>
    );
  },
});

export default WrapperNew;
