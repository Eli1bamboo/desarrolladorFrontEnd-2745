import React from 'react'

const styles = {
  root: {
    cursor: 'pointer'
  }
}

function FilmItem ({ title, url, onSelectFilm }) {
  return (
    <li style={styles.root} onClick={() => onSelectFilm(url)}>
      {title}
    </li>
  )
}

export default FilmItem
