import React, { Component } from 'react'
import HomePage from './HomePage/HomePage'
import ParkSearch from './ParkSearch/ParkSearch'
import Badges from './Badges/Badges'
import Favorites from './Favorites/Favorites'
import ParkHistory from './ParkHistory/ParkHistory'
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
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/history' component={ParkHistory} />
          <Route path='/search' component={ParkSearch} />
          <Route path='/badges' component={Badges} />
          <Route path='/favorites' component={Favorites} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
