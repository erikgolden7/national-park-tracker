import React, { Component } from 'react'
import ParkInfo from './ParkInfo/ParkInfo'
import HomePage from './HomePage/HomePage'
import ParkSearch from './ParkSearch/ParkSearch'
import Badges from './Badges/Badges'
import About from './About/About'
import Nav from './Nav/Nav'
import NotFound from './NotFound/NotFound'
import {Switch, Route} from 'react-router-dom'
import '../styles/App.css'

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
       
      <Nav/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/info' component={ParkInfo} />
          <Route path='/search' component={ParkSearch} />
          <Route path='/badges' component={Badges} />
          <Route path='/about' component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
