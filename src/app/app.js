import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

const { Main } = require('./components');

window.React = React;

injectTapEventPlugin();

render(
  <Main />,
  document.getElementById('app')
);
