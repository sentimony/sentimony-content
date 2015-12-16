import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from './components/Main';

window.React = React;

injectTapEventPlugin();

render(

  <Main />,
  document.getElementById('app')
);
