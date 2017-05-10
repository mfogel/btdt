// @flow

import React from 'react';
import { Grid, Col, Row, Image, ButtonToolbar, Button } from 'react-bootstrap'
import './tiles.css';

const Tile = () => (
  <Col className="tile" xs={12} sm={6} md={4} lg={3}>
    <ButtonToolbar className="tile-actions">
      <Button bsStyle="success"><span className="glyphicon glyphicon-ok"></span></Button>
      <Button bsStyle="info"><span className="glyphicon glyphicon-refresh"></span></Button>
      <Button bsStyle="warning"><span className="glyphicon glyphicon-star"></span></Button>
    </ButtonToolbar>
    <Image src="http://placehold.it/480x360" alt="480x360" rounded responsive/>
    <h3 className="tile-description">Hike the Inca trail</h3>
  </Col>
)

const Tiles = () => (
  <Grid fluid>
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
