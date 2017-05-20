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
        <Button bsStyle="info"><span className="glyphicon glyphicon-star-empty"></span><span className="hidden-xs"> Save</span></Button>
        <Button bsStyle="primary"><span className="glyphicon glyphicon-share"></span><span className="hidden-xs"> Share</span></Button>
      </ButtonToolbar>
      <h2 className="goal-title">{sampleGoal.title}</h2>
    </div>
  </div>
)

export default Goal
