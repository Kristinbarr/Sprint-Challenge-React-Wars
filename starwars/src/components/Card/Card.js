import React, { useState, useEffect } from 'react'
import { Header, Segment } from 'semantic-ui-react'
import axios from 'axios'
import './Card.css'

const Card = (props) => {
  const [species, setSpecies] = useState([])
  // const [homeWorld, setHomeWorld] = useState('')

  useEffect(()=> {
    axios.get(props.char.species)
    .then((res)=> {
      setSpecies(res.data.name)
    })
    .catch((error) => {
      console.log('Something went fetching species!', error)
    })
  },[])

  const { name, birth_year  } = props.char

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
        <Segment.Group horizontal>
          <Segment>Species</Segment>
          <Segment>{species}</Segment>
        </Segment.Group>
        <Segment.Group horizontal>
          <Segment>Homeworld</Segment>
          <Segment>{}</Segment>
        </Segment.Group>
      </Segment.Group>
    </div>
  )
}

export default Card
