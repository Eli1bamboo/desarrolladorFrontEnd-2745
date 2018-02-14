import React from 'react'

function FilmDetail ({ title, episode_id, director }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{`Episodio: ${episode_id}`}</h3>
      <h3>{`Director: ${director}`}</h3>
    </div>
  )
}

export default FilmDetail
