import React from 'react'
import Card from '../Card/Card'
import data from '../../swapiData'

const CharGrid = () => {
  const charArr = data.results

  return (
    <div className='char-grid'>
      {charArr.map(char => (
        <Card char={char} key={char.created} />
      ))}
    </div>
  )
}

export default CharGrid
