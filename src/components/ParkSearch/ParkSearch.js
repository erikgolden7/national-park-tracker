import React, { Component } from 'react';
import NatParkList from './NatParkList/NatParkList'
import UsMap from './UsMap/UsMap'
import './parkSearch.css'

export default class ParkSearch extends Component {
  constructor (props) {
    super(props)

    this.state = {
      parks: [],
      toggle: false,
      listToggle: true,
      state: {},
      selectedState: ''
    }

    this.stateParks = this.stateParks.bind(this)
    this.setToggle = this.setToggle.bind(this)
    this.listToggle = this.listToggle.bind(this)
    this.selectMap = this.selectMap.bind(this)
    this.selectPark = this.selectPark.bind(this)
    this.setSelectedState = this.setSelectedState.bind(this)
    this.clearParks = this.clearParks.bind(this)
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

  setSelectedState(event){
    this.setState({selectedState: event})
  }

  clearParks(event){
    this.setState({parks: []})
  }

  render() {
    const {toggle, listToggle, parks, state, selectedState} = this.state

    return (
      <div className="search">
        {
          (toggle && !listToggle) || (!toggle && listToggle) ?
          <div className="top">
            <div className="top-left">
              <UsMap listSelect={this.listToggle} select={this.selectMap} toggle={toggle} listToggle={listToggle} setParks={this.stateParks} state={state} setSelectedState={this.setSelectedState} clearParks={this.clearParks}/>
            </div>
            <div className="top-right">
              <div className="find-img"/>
            </div>
          </div> 
          :
          <UsMap listSelect={this.listToggle} select={this.selectMap} toggle={toggle} listToggle={listToggle} setParks={this.stateParks} state={state}setSelectedState={this.setSelectedState} clearParks={this.clearParks}/>
        }
        <NatParkList user={this.props.user} select={this.setToggle} toggle={toggle} listToggle={listToggle} parkList={parks} selectPark={this.selectPark} state={state} selectedState={selectedState} />
      </div>
    );
  }
}
