import React, { Component } from 'react'
import Pokemon from './Pokemon'
import { connect } from 'react-redux'

const styles = {
  pokemon: {
    cursor: 'Pointer'
  }
}

class PokemonList extends Component {
  constructor () {
    super()
    this.state = {
      keyword: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ keyword: event.target.value })
  }

  render () {
    const { list, onLoadMore, onClickPokemon } = this.props
    const { keyword } = this.state
    const filterResult = list.filter((pokemon) =>
      pokemon.name.includes(keyword)
    )
    return (
      <div>
        <input onChange={this.handleInputChange} />
        {!keyword ? (
          list.map((pokemon) => (
            <Pokemon
              key={pokemon.url.split('/')[6]}
              id={pokemon.url.split('/')[6]}
              url={pokemon.url}
              name={pokemon.name}
              style={styles.pokemon}
              onClickPokemon={onClickPokemon}
            />
          ))
        ) : filterResult.length ? (
          filterResult.map((pokemon) => (
            <Pokemon
              key={pokemon.url.split('/')[6]}
              id={pokemon.url.split('/')[6]}
              url={pokemon.url}
              name={pokemon.name}
              style={styles.pokemon}
              onClickPokemon={onClickPokemon}
            />
          ))
        ) : (
          'No se encuentra'
        )}
        <button onClick={() => onLoadMore()}>Cargar Más</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { PokemonList: {} } = state

  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
