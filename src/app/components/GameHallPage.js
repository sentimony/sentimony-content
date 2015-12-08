import React from 'react';

const { Sidebar } = require('./sidebar');
const { Wrapper } = require('./wrapper');

const GameHallPage = React.createClass({

  render() {

    return (
      <div>
        <Sidebar />
        <Wrapper />
      </div>

    );
  },
});

module.exports = GameHallPage;
