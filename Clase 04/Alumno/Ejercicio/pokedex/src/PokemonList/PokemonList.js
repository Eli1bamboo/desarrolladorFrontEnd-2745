import React, { Component } from 'react'
import Pokemon from './Pokemon'

const pokemonList = [
  {
    id: 1,
    name: 'bulbasaur'
  },
  {
    id: 2,
    name: 'ivysaur'
  },
  {
    id: 3,
    name: 'venusaur'
  },
  {
    id: 4,
    name: 'charmander'
  },
  {
    id: 5,
    name: 'charmeleon'
  },
  {
    id: 6,
    name: 'charizard'
  },
  {
    id: 7,
    name: 'squirtle'
  },
  {
    id: 8,
    name: 'wartortle'
  },
  {
    id: 9,
    name: 'blastoise'
  },
  {
    id: 10,
    name: 'caterpie'
  },
  {
    id: 11,
    name: 'metapod'
  },
  {
    id: 12,
    name: 'butterfree'
  },
  {
    id: 13,
    name: 'weedle'
  },
  {
    id: 14,
    name: 'kakuna'
  },
  {
    id: 15,
    name: 'beedrill'
  },
  {
    id: 16,
    name: 'pidgey'
  },
  {
    id: 17,
    name: 'pidgeotto'
  },
  {
    id: 18,
    name: 'pidgeot'
  },
  {
    id: 19,
    name: 'rattata'
  },
  {
    id: 20,
    name: 'raticate'
  }
]

export default class PokemonList extends Component {
  constructor () {
    super()
    this.state = {
      pokemon: null,
      errorMessage: null
    }
  }

  handleFind = (event) => {
    let keyword = event.target.value
    let findResult = pokemonList.find((pokemon) => {
      return pokemon.name === keyword
    })

    return findResult === undefined
      ? this.setState({
          errorMessage: 'No se encuentra',
          pokemon: null
        })
      : this.setState({
          pokemon: findResult,
          errorMessage: null
        })
  }

  render () {
    return (
      <div>
        <input onChange={this.handleFind} />
        <p>{this.state.errorMessage}</p>
        <ul>
          {this.state.pokemon === null ? (
            pokemonList.map((pokemon) => (
              <li key={pokemon.id}>
                <Pokemon id={pokemon.id} name={pokemon.name} />
              </li>
            ))
          ) : (
            <li>
              <Pokemon
                id={this.state.pokemon.id}
                name={this.state.pokemon.name}
              />
            </li>
          )}
        </ul>
      </div>
    )
  }
}
