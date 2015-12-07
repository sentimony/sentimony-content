'use strict';

import React from 'react';

import { RaisedButton, Dialog, TextField } from 'material-ui';

import Sidebar from './Sidebar.jsx';
import Wrapper from './Wrapper.jsx';

const GameHallPage = React.createClass({

  render() {

    return (
      <div>

        <aside>
          <div><a href="/">Logo</a></div>
          <div>User Info</div>
          <div>
            <ul>
              <li><a href="#">Игровой зал</a></li>
              <li><a href="#">Лотерея</a></li>
              <li><a href="#">Турниры</a></li>
              <li><a href="#">Акции</a></li>
              <li><a href="#">Магазин фишек</a></li>
              <li><a href="#">Новости</a></li>
              <li><a href="#">Видео</a></li>
              <li><a href="#">Скачать plug-in</a></li>
            </ul>
          </div>
        </aside>

        <main>
          
        </main>

      </div>
    );
  },
});

export default GameHallPage;
