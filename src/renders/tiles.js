// @flow

import React from 'react';
import { Grid, Col, Row, Image, ButtonToolbar, Button } from 'react-bootstrap'
import './tiles.css';

const Tile = () => (
  <Col xs={12} sm={6} md={4} lg={3}>
    <div className="tile">
      <ButtonToolbar className="tile-actions">
        <Button bsStyle="success"><span className="glyphicon glyphicon-ok"></span></Button>
        <Button bsStyle="info"><span className="glyphicon glyphicon-refresh"></span></Button>
        <Button bsStyle="warning"><span className="glyphicon glyphicon-star"></span></Button>
      </ButtonToolbar>
      <Image src="http://placehold.it/480x360" alt="480x360" rounded responsive/>
      <p className="tile-bottom-bar">
        <h3 className="tile-title">Hike the Inca trail</h3>
        <ul className="tile-tag-list">
          <li><Button className="tile-tag" bsSize="xs" bsStyle="info"><span className="glyphicon glyphicon-tag"></span>travel</Button></li>
        </ul>
      </p>
    </div>
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
