import React from 'react'
import './filmList.css'

import FilmItem from './FilmItem'

function FilmList ({ FilmList, onSelectFilm }) {
  return (
    <ul>
      {FilmList.map((film) => (
        <FilmItem
          key={film.url}
          title={film.title}
          episode_id={film.episode_id}
          url={film.url}
          onSelectFilm={onSelectFilm}
        />
      ))}
    </ul>
  )
}

export default FilmList
