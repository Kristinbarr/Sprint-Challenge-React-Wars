import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Films = props => {
  const [films, setFilms] = useState([])

  useEffect(() => {
    axios.all(props.films.map(film => axios.get(film))).then(
      axios.spread(function(...res) {
        setFilms(res)
      })
    )
  }, [films])

  return (
    <>
      {films.map(film => (
        <div>{film.data.title}</div>
      ))}
    </>
  )
}

export default Films
