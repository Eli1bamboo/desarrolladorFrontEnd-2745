import React, { Component } from 'react'

const styles = {
  container: {
    border: '2px solid red'
  }
}

export default class Pokemon extends Component {
  render () {
    const { name, height, weight, img } = this.props

    return (
      <div className='container' style={styles.container}>
        <p>{name}</p>
        <p>{height}</p>
        <p>{weight}</p>
        <img src={img} alt='' />
      </div>
    )
  }
}
