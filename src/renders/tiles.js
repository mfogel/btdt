// @flow

import React from 'react';
import ReactNbsp from 'react-nbsp'
import { Grid, Col, Row, Thumbnail, Button } from 'react-bootstrap'

const Tile = () => (
  <Col xs={12} sm={6} md={4} lg={3}>
    <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png" alt="242x200">
      <h3>Thumbnail label</h3>
      <p>Description</p>
      <p>
        <Button bsStyle="primary">Button</Button>
	<ReactNbsp />
        <Button bsStyle="default">Button</Button>
      </p>
    </Thumbnail>
  </Col>
)

const Tiles = () => (
  <Grid>
    <Row>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </Row>
  </Grid>
)

export default Tiles
