import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Character from './components/Character'
import Pages from './components/Pages'
import './App.css'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [chars, setChars] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [charIdx, setCharIdx] = useState('')
  const [char, setChar] = useState({})

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/${charIdx}`)
      .then(res => {
        setChars(res.data.results)
      })
      .catch(err => err)
  }, [charIdx])

  const requestChars = input => {
    setCharIdx(input)
  }

  return (
    <div className="App">
      <h1 className="display-3">React Wars</h1>
      <p className="lead">below are featured characters from StarWars</p>
      <hr className="my-2" />
      {chars.length === 0 ? (
        <h4>Loading Characters...</h4>
      ) : (
        <>
          {chars.map(char => (
            <div key={char.name}>
              <Character character={char} />
            </div>
          ))}
        </>
      )}
      <Pages />
    </div>
  )
}

export default App
