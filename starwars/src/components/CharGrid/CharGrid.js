import React, { useState } from 'react'
import Card from '../Card/Card'
import data from '../../swapiData'
import './CharGrid.css'

const CharGrid = (props) => {
  const charArr = props.charData.results
  // console.log('chargrid', charArr, Array.isArray(charArr))
  // console.log('data', data.results)
  // console.log('APIarr',charArr)

  return (
    <div className='char-grid'>
      {data.results.map(char => <Card char={char} key={char.created} />
      )}
    </div>
  )
}

export default CharGrid
