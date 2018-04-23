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
      listToggle: true,
      state: {}
    }

    this.stateParks = this.stateParks.bind(this)
    this.setToggle = this.setToggle.bind(this)
    this.listToggle = this.listToggle.bind(this)
    this.selectMap = this.selectMap.bind(this)
    this.selectPark = this.selectPark.bind(this)
  }

  stateParks (parks) {
    this.setState({parks})
  }

  setToggle(){
    this.setState({toggle: !this.state.toggle})
  }

  selectMap(){
    this.setState({toggle: true})
  }

  listToggle(){
    this.setState({listToggle: false})
  }

  selectPark (state) {
    this.setState({state})
  }

  render() {
    const {toggle, listToggle, parks, state} = this.state
    return (
      <div className="search">
        <UsMap listSelect={this.listToggle} select={this.selectMap} toggle={toggle} listToggle={listToggle} setParks={this.stateParks} state={state}/> 
        <NatParkList select={this.setToggle} toggle={toggle} listToggle={listToggle} parkList={parks} selectPark={this.selectPark} state={state} />
      </div>
    );
  }
}
