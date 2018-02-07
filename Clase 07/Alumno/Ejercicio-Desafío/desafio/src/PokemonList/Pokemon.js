import React from 'react'
const styles = {
  select: {
    cursor: 'pointer'
  }
}

export default function Pokemon ({ name, id, url, onClickPokemon }) {
  return (
    <div onClick={() => onClickPokemon(url)} style={styles.select}>
      <p>{name}</p>
      <p>{id}</p>
    </div>
  )
}
