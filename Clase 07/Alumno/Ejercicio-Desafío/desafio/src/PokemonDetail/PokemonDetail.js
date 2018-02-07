import React from 'react'

export default function PokemonDetail ({ name, weight, height, sprites }) {
  console.log(sprites)
  return (
    <div>
      <p>Pokemon seleccionado:</p>
      <br />
      <p>Nombre: {name}</p>
      <br />
      <p>Peso: {weight}</p>
      <br />
      <p>Altura: {height}</p>
      <br />
      <p>Apariencia:</p>
      <br />
      <img src={sprites.front_default} alt={name} />
    </div>
  )
}
