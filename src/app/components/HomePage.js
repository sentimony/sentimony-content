import React from 'react';

import { Sidebar } from './sidebar';
import { Wrapper } from './wrapper';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Sidebar />
        <Wrapper />
      </div>
    );
  }
}

export { HomePage }
