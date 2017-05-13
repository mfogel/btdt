// @flow

import React from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap'
import ReactNbsp from 'react-nbsp';
import { Link, withRouter } from 'react-router-dom'

const NavBar = withRouter(({ history }) => (
  <Navbar fixedTop fluid>
    <Navbar.Header>
      <Navbar.Brand><Link to="/">Been There, Done That</Link></Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullRight>
        {/* TODO: change style of login button to outline with bootstrap v4 */}
        <Button bsStyle="link" onClick={() => history.push('/login')}>Log In</Button>
        <ReactNbsp />
        <Button bsStyle="success" onClick={() => history.push('/signup')}>Sign Up</Button>
      </Navbar.Form>
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl id="search-box" type="text" placeholder="Search..." />
        </FormGroup>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>
))

export default NavBar
