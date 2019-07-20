import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from 'semantic-ui-react'
import CharGrid from './components/CharGrid/CharGrid'
import './App.css'

const App = () => {
  const [state, setState] = useState({
    chars: {},
    prev: null,
    next: null,
    page: '',
    render: false,
    disabled: true
  })
  // const [chars, setChars] = useState({})
  // const [prev, setPrev] = useState('test')
  // const [next, setNext] = useState(null)
  // const [page, setPage] = useState('https://swapi.co/api/people/?format=json')
  // const [render, setRender] = useState(false)
  // const disabled = 'disabled'
  // console.log('page before', state.page)

  useEffect(() => {
    getChars(state.page === '' ? 'https://swapi.co/api/people/' : state.page)
  }, [state.render])

  const getChars = (page) => {
    axios
      .get(page)
      .then((res) => {
        setState({
          ...state,
          chars: res.data,
          next: res.data.next,
          prev: res.data.previous,
          render: false
        })
        // setChars(res.data)
        // setNext(res.data.next)
        // setPrev(res.data.previous)
        // setRender(false)
        // console.log('res',res)
        // console.log('next',next)
        // console.log('res.data',res.data.next)
      })
      .catch((error) => {
        console.log('something went wrong!', error)
  })}

  // console.log('page after', page)
  const nextPage = (e) => {
    e.preventDefault()
    setState({
      ...state,
      page: state.next,
      render: true
    })
    // console.log('clicked next', state.page)
    getChars(state.page)
    // getChars(state.page)
    // setPage(next)
    // setRender(true)
    // getChars(page)
  }
  // Try to think through what state you'll need for this app before starting. Then build out the state properties here.
  // name, birth year, species, homeworld, maybe films, maybe pull picture from wiki with name

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a side effect in a component, you want to think about which state and/or props it should sync up with, if any.

  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <CharGrid chars={state.chars} />
      <div className='buttons'>
        <Button
          disabled={state.prev ? false : true}
          content='Previous Page'
          icon='left arrow'
          labelPosition='left'
          // onClick={prevPage}
        />
        <Button
          disabled={state.next ? false : true}
          content='Next Page'
          icon='right arrow'
          labelPosition='right'
          onClick={nextPage}
        />
      </div>
    </div>
  )
}

export default App
