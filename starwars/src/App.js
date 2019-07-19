import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

const App = () => {

  const [ char, setChar ] = useState(null)

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then((res) => {
        setChar(res)
        console.log(res)
      })
      .catch((error) => {
        console.log('something went wrong!', error)
      })
  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out the state properties here.
  // name, birth year, species, homeworld, maybe films, maybe pull picture from wiki with name

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a side effect in a component, you want to think about which state and/or props it should sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
