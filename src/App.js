// @flow

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './renders/navbar.js'
import Tiles from './renders/tiles.js'
import Goal from './renders/goal.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Tiles} />
          <Route path="/goals/:id" component={Goal} />
        </div>
      </Router>
    )
  }
}

export default App
