// @flow

import React, { Component } from 'react';
import NavBar from './renders/navbar.js'
import Tiles from './renders/tiles.js'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Tiles />
      </div>
    );
  }
}

export default App;
