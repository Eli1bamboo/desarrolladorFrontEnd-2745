import React, { Component } from 'react'
import PokemonList from './PokemonList'
import PokemonDetail from './PokemonDetail'

import { request } from './utils'

const styles = {
  sidebar: {
    width: '30%',
    float: 'left'
  },
  content: {
    width: '70%',
    float: 'left'
  },
  dBlock: {
    display: 'block'
  }
}

class App extends Component {
  constructor () {
    super()

    this.state = {
      pokemonList: [],
      onLoad: true,
      selectedPokemon: null
    }
  }

  componentWillMount () {
    request('https://pokeapi.co/api/v2/pokemon/', 'GET')
      .then((response) => {
        this.setState({
          pokemonList: response.results,
          onLoad: false
        })
      })
      .catch((error) => console.log(error))
  }

  loadMore = () => {}

  handleClickPokemon = (url) => {
    this.setState({
      onLoad: true
    })
    request(url, 'GET')
      .then((response) => {
        this.setState({
          selectedPokemon: response,
          onLoad: false
        })
      })
      .catch((error) => console.log(error))
  }

  render () {
    const { onLoad, pokemonList, selectedPokemon } = this.state
    const spinner = <i className='fa fa-circle-o-notch fa-spin fa-3x fa-fw' />

    return (
      <div>
        <div style={styles.sidebar}>
          {onLoad ? spinner : false}
          <PokemonList
            list={pokemonList}
            onLoadMore={this.loadMore}
            onClickPokemon={this.handleClickPokemon}
          />
        </div>
        <div style={styles.content}>
          {selectedPokemon ? (
            <PokemonDetail
              name={selectedPokemon.name}
              weight={selectedPokemon.weight}
              height={selectedPokemon.height}
              sprites={selectedPokemon.sprites}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

export default App
