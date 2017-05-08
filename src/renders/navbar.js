// @flow

import React from 'react';
import { Navbar, FormGroup, FormControl, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap'

const NavBar = () => (
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
)

export default NavBar
