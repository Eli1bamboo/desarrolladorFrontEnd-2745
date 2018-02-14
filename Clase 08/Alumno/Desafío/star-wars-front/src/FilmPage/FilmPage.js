import React, { Component } from 'react'
import FilmList from './FilmList'
import FilmDetail from './FilmDetail'
import { connect } from 'react-redux'

import { fetchFilm, fetchDetail } from './actions'

const styles = {
  root: {
    display: 'flex'
  }
}

class FilmPage extends Component {
  constructor () {
    super()
    this.state = {
      inputValue: ''
    }
  }

  componentWillMount () {
    const { fetchFilm } = this.props
    fetchFilm()
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render () {
    const { isSearching, filmList, filmDetail, fetchDetail } = this.props

    const { inputValue } = this.state

    const filteredList = filmList.filter((film) =>
      film.title.toLowerCase().includes(inputValue.toLowerCase())
    )

    return (
      <div style={styles.root}>
        <div>
          {isSearching ? 'Buscando...' : null}
          <div>
            <input onChange={this.handleChange} />
          </div>
          <FilmList FilmList={filteredList} onSelectFilm={fetchDetail} />
        </div>
        <div>
          {filmDetail ? (
            <FilmDetail
              title={filmDetail.title}
              episode_id={filmDetail.episode_id}
              director={filmDetail.director}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { filmPage: { isSearching, filmList = [], filmDetail = null } } = state

  return {
    isSearching,
    filmList,
    filmDetail
  }
}

const mapDispatchToProps = {
  fetchFilm,
  fetchDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage)
