import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import data from './swapiData'
import { Button } from 'semantic-ui-react'
import CharGrid from './components/CharGrid/CharGrid'
import './App.css'

const App = () => {
  const [char, setChar] = useState([])
  const [next, setNext] = useState(null)
  const [previous, setPrevious] = useState(null)
  const nextDisabled = next ? '' : 'disabled'
  const prevDisabled = next ? '' : 'disabled'

  useEffect(() => {
    // use if api isn't working
    // setChar(data.results)

    axios
      .get('https://swapi.co/api/people/')
      .then((res) => {
        setChar(res.data)
        setNext(res.data.next)
        setPrevious(res.data.previous)
        // console.log('res.data',res.data, Array.isArray(res.data.results))
      })
      .catch((error) => {
        console.log('something went wrong!', error)
      })
  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out the state properties here.
  // name, birth year, species, homeworld, maybe films, maybe pull picture from wiki with name

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a side effect in a component, you want to think about which state and/or props it should sync up with, if any.

  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <CharGrid charData={char} />
      <div className='buttons'>
        <Button
          className={prevDisabled}
          className='button'
          content='Previous Page'
          icon='left arrow'
          labelPosition='left'
        />
        <Button
          className={nextDisabled}
          className='button'
          content='Next Page'
          icon='right arrow'
          labelPosition='right'
        />
      </div>
    </div>
  )
}

export default App
