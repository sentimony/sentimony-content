'use strict';

import React from 'react';

import { List, ListItem } from 'material-ui';

const SidebarNav = React.createClass({

  render() {

    return (
      <List>
        <ListItem primaryText="Игровой зал" />
        <ListItem primaryText="Лотерея" />
        <ListItem primaryText="Турниры" />
        <ListItem primaryText="Акции" />
        <ListItem primaryText="Магазин фишек" />
        <ListItem primaryText="Новости" />
        <ListItem primaryText="Видео" />
        <ListItem primaryText="Скачать plug-in" />
      </List>
    );
  },
});

export default SidebarNav;
