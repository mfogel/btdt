import React from 'react'
import { Button } from 'react-bootstrap'
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
      <div className="goal-title">
        <h3>{sampleGoal.title}:</h3>
        <h4><em><span className="glyphicon glyphicon-remove"></span>Incomplete</em></h4>
      </div>
      <p className="goal-actions"><Button bsStyle="success"><span className="glyphicon glyphicon-ok"></span></Button></p>
    </div>
  </div>
)

export default Goal
