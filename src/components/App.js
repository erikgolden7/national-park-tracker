import React, { Component } from 'react'
import axios from 'axios'
import HomePage from './HomePage/HomePage'
import ParkSearch from './ParkSearch/ParkSearch'
import Badges from './Badges/Badges'
import Favorites from './Favorites/Favorites'
import FavoriteMap from './Favorites/FavoriteMap/FavoriteMap'
import ParkHistory from './ParkHistory/ParkHistory'
import NotFound from './NotFound/NotFound'
import {Switch, Route} from 'react-router-dom'
import '../styles/App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      parks: [],
      user: {}
    }

    this.stateParks = this.stateParks.bind(this)
  }

  componentDidMount() {
    axios.get('/auth/me').then( res => {
      this.setState({user: res.data[0]})
    })
  }

  stateParks (parks) {
    this.setState({parks})
  }

  render () {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/history' render={(props) => <ParkHistory {...props} isAuthed={this.state.user.id ? true : false} user={this.state.user} />}/>
          <Route path='/search' render={(props) => <ParkSearch {...props} isAuthed={this.isAuthed} user={this.state.user} />}/>
          <Route path='/badges' render={(props) => <Badges {...props} isAuthed={this.state.user.id ? true : false} user={this.state.user} />}/>
          <Route path='/favorites' render={(props) => <Favorites {...props} isAuthed={this.state.user.id ? true : false} user={this.state.user} />}/>
          <Route path='/favoriteMap' render={(props) => <FavoriteMap {...props} isAuthed={this.state.user.id ? true : false} user={this.state.user} />}/>
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
