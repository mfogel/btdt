import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>

        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand><a href="#">Been There, Done That</a></Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullRight>
              <ButtonToolbar>

              {/* TODO: change style to outline button with bootstrap v4 */}
              <ButtonGroup><Button bsStyle="link">Log In</Button></ButtonGroup>

              <ButtonGroup><Button bsStyle="success">Sign Up</Button></ButtonGroup>
              </ButtonToolbar>
            </Navbar.Form>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl id="search-box" type="text" placeholder="Search..." />
              </FormGroup>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>

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
