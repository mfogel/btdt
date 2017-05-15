import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import './goal.css';

const sampleGoal = {
  id: Math.floor(Math.random()*10000),
  slug: 'travel-kansas',
  title: 'Travel Kansas',
  tags: ['travel'],
  imageUrl: '/images/states.svg',
}

const Goal = ({match}) => (
  <div className="goal" style={{backgroundImage: 'url(' + sampleGoal.imageUrl + ')'}}>
    <div className="goal-topbar">
      <ButtonToolbar className="goal-actions">
        <Button bsStyle="warning"><span className="glyphicon glyphicon-unchecked"></span> Incomplete</Button>
        <Button bsStyle="info"><span className="glyphicon glyphicon-star-empty"></span> Save</Button>
      </ButtonToolbar>
      <h2 className="goal-title">{sampleGoal.title}</h2>
    </div>
  </div>
)

export default Goal
