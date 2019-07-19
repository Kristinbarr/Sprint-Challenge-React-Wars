import React, { useState } from 'react'
import { Header, Segment } from 'semantic-ui-react'
import './Card.css'

const Card = (props) => {
  console.log('card', props.char)
  const { name, birth_year,  } = props.char

  return (
    <div className='card'>
      <Segment.Group>
        <Segment raised>
          <Header>{name}</Header>
        </Segment>
        <Segment.Group horizontal>
          <Segment>Birth Year</Segment>
          <Segment>{birth_year}</Segment>
        </Segment.Group>
      </Segment.Group>
    </div>
  )
}

export default Card
