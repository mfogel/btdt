// @flow

import React from 'react';
import { Grid, Col, Row, Image, ButtonToolbar, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import './tiles.css';

const TagListElem = ({ tag }) => (
  <li>
    <Button className="tile-tag" bsSize="xs" bsStyle="info">
      <span className="glyphicon glyphicon-tag"></span>{tag}
    </Button>
  </li>
)

const Tile = withRouter(({ history, goal }) => (
  <Col xs={12} sm={6} md={4}>
    <div className="tile" onClick={() => history.push('/goals/' + goal.slug + '-' + goal.id)}>
      <ButtonToolbar className="tile-actions">
        <Button bsStyle="warning"><span className="glyphicon glyphicon-unchecked"></span></Button>
        <Button bsStyle="info"><span className="glyphicon glyphicon-star-empty"></span></Button>
      </ButtonToolbar>
      <Image src={goal.imageUrl} alt={goal.title} rounded responsive/>
      <div className="tile-bottom-bar">
        <h3 className="tile-title">{goal.title}</h3>
        <ul className="tile-tag-list">
          {goal.tags.map((tag) => <TagListElem key={tag} tag={tag} />)}
        </ul>
      </div>
    </div>
  </Col>
))

const getSampleGoal = () => ({
  id: Math.floor(Math.random()*10000),
  slug: 'travel-kansas',
  title: 'Travel Kansas',
  tags: ['travel'],
  imageUrl: 'http://placehold.it/480x360',
})

const goals = [...Array(12).keys()].map(getSampleGoal)

const Tiles = () => (
  <Grid fluid>
    <Row>
      {goals.map((goal) => <Tile key={goal.id} goal={goal} />)}
    </Row>
  </Grid>
)

export default Tiles
