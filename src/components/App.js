import React, { Component } from 'react'
import logo from '../assets/natParkIcon.png'
import '../App.css'
import NatParkList from './NatParkList'
import UsMap from './UsMap'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      parks: []
    }

    this.stateParks = this.stateParks.bind(this)
  }

  stateParks (parks) {
    this.setState({parks})
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        <UsMap setParks={this.stateParks} />
        <NatParkList parkList={this.state.parks} />
      </div>
    )
  }
}

export default App
