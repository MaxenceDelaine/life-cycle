import React from 'react'

class MyTimer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count : 0
    }
  }

  setTimer () {
    this.setState({count : this.state.count + 1})
  }

  reset () {
    this.setState({count : this.state.count = 0})
  }

  componentDidMount () {
    this.setInterval = setInterval(() => this.setTimer(), 1000)
  }

  componentWillUpdate () {
    console.log('Le composant va se mettre à jour')
  }

  componentDidUpdate () {
    console.log('Le composant a été mis à jour')
  }

  render () {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <img src='https://media.giphy.com/media/em0OGn8WcfGZa/giphy.gif' alt='legolas vs gimli beer count' />
        <br />
        <button onClick={this.reset.bind(this)}>Reset</button>
      </div>
    )
  }
}

export default MyTimer
