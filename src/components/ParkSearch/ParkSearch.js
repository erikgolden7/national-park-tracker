import React, { Component } from 'react';
import NatParkList from './NatParkList/NatParkList'
import UsMap from '../UsMap'
import './parkSearch.css'

export default class ParkSearch extends Component {
  constructor (props) {
    super(props)

    this.state = {
      parks: [],
      toggle: false,
      listToggle: true
    }

    this.stateParks = this.stateParks.bind(this)
    this.setToggle = this.setToggle.bind(this)
    this.listToggle = this.listToggle.bind(this)
  }

  stateParks (parks) {
    this.setState({parks})
  }

  setToggle(){
    this.setState({toggle: !this.state.toggle})
  }

  listToggle(){
    this.setState({listToggle: false})
  }

  render() {
    return (
      <div className="search">
        <UsMap listSelect={this.listToggle} select={this.setToggle} setParks={this.stateParks} /> 
        <NatParkList select={this.setToggle} toggle={this.state.toggle} listToggle={this.state.listToggle} parkList={this.state.parks} />
      </div>
    );
  }
}
