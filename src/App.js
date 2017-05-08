// @flow

import React, { Component } from 'react';
import NavBar from './renders/navbar.js'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="jumbotron">
            <h1>Navbar example</h1>
            <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
            <p>To see the difference between static and fixed top navbars, just scroll.</p>
            <p>
              <a className="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs &raquo;</a>
            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
