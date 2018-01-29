import React, { Component, Fragment } from 'react'

import PokemonList from './PokemonList'

import './App.css'

class App extends Component {
  constructor () {
    super()

    this.state = {
      showList: true
    }
  }

  handleToggle = () => {
    const { showList } = this.state

    this.setState({
      showList: !showList
    })
  }

  render () {
    const { showList } = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Pokedex</h1>
        </header>
        <button onClick={this.handleToggle}>
          {showList ? 'Ocultar' : 'Mostrar'}
        </button>
        <Fragment>{showList ? <PokemonList /> : null}</Fragment>
      </div>
    )
  }
}

export default App
