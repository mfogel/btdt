// @flow

import React from 'react';
import ReactNbsp from 'react-nbsp';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap'

const NavBar = () => (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand><a href="#">Been There, Done That</a></Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullRight>
        {/* TODO: change style of login button to outline with bootstrap v4 */}
        <Button bsStyle="link">Log In</Button>
        <ReactNbsp />
        <Button bsStyle="success">Sign Up</Button>
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
