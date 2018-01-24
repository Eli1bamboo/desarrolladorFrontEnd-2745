import React, { Component } from 'react'
import './App.css'
import Pokemon from './Pokemon'

const pokemon = {
  name: 'Meow',
  height: 10,
  weight: 20,
  img:
    'https://vignette4.wikia.nocookie.net/pokemon/images/1/16/052Meowth_DP_anime.png'
}
class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Pokemones</h1>
        </header>
        <Pokemon
          name={pokemon.name}
          height={pokemon.height}
          weight={pokemon.weight}
          img={pokemon.img}
        />
      </div>
    )
  }
}

export default App
