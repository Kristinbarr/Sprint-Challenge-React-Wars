import React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import { charSpecies, photos } from '../../attrData'
import './Card.css'

const parseUrl = (url) => url.split('/')[5]

const Card = (props) => {
  const photo = photos[props.char.name]
  const speciesId = parseUrl(props.char.species[0])

  const { name, birth_year, films } = props.char

  return (
    <div className='card'>
      <Segment.Group>
        <Segment raised>
          <Header>{name}</Header>
          <img src={photo} alt='character' />
        </Segment>
        <Segment.Group horizontal>
          <Segment>Birth Year</Segment>
          <Segment>{birth_year}</Segment>
        </Segment.Group>
        <Segment.Group horizontal>
          <Segment>Species</Segment>
          <Segment>{charSpecies[speciesId]}</Segment>
        </Segment.Group>
        <Segment.Group horizontal>
          <Segment>Films Appered In:</Segment>
          <Segment>{films.length}</Segment>
        </Segment.Group>
      </Segment.Group>
    </div>
  )
}

export default Card
