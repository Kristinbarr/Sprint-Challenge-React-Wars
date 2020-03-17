import React, { useState } from 'react'
import { Container, Collapse, Button, CardBody, Card } from 'reactstrap'
import Films from './Films'
import './character.css'

const Character = props => {
  console.log(props)
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="character">
      <Button className="button" color="warning" onClick={toggle}>
        {props.character.name}
      </Button>
      <Collapse
        isOpen={isOpen}
        className="collapse"
      >
        <Card className="card">
          <CardBody className="card-body">
            <div className="card-left">
              <h5>{props.character.name}</h5>
              <div>height: {props.character.height}</div>
              <div>mass: {props.character.mass}</div>
              <div>birth year: {props.character.birth_year}</div>
            </div>
            <div>Films: <Films films={props.character.films} /></div>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  )
}

export default Character
