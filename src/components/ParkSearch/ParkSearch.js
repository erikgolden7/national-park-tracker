import React, { Component } from 'react';
import NatParkList from './NatParkList/NatParkList'
import UsMap from '../UsMap'
import './parkSearch.css'

export default class ParkSearch extends Component {
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

  render() {
    return (
      <div className="search">
        <UsMap setParks={this.stateParks} /> 
        <NatParkList parkList={this.state.parks} />
      </div>
    );
  }
}
