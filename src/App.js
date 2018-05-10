import React, { Component } from 'react'
import logo from './firereact.svg'
import './App.css'
import MyTimer from './MyTimer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to the Green Dragon tavern</h1>
        </header>
        <MyTimer />
      </div>
    )
  }
}

export default App
