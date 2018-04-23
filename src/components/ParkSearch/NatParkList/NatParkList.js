import React, { Component } from 'react'
import ParkInfo from '../../ParkInfo/ParkInfo'
import './natParkList.css'

export default class NatParkList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      state: {}
    }
  }
  

  selectPark (state) {
    this.setState({toggle: true, state: state})
    console.log('value', state)
  }

  render () {
    console.log("Toggle:",this.props.toggle, "List Toggle:",this.props.listToggle);
    
    const parkList = this.props.parkList.map((e, i) => {
      // console.log(e)
      return (
        <div key={i}>
          <div className="park-list-item" onClick={() => {this.selectPark(e) ; this.props.select()}}>
            {e.fullName}
          </div>
        </div>
      )
    })

    return (
      <div className='park-list'>
        {
          this.props.toggle && !this.props.listToggle 
          ?
          parkList 
          :
          !this.props.toggle && !this.props.listToggle 
          ?
          <div>
            <ParkInfo state={this.state.state}/>
            <button onClick={this.props.select} > Back </button>
          </div>
          :
          !this.props.toggle && this.props.listToggle 
          ?
          <div>Select a state and park from the map above to view details.
          </div>
          :
          ''
        }
      </div>
    )
  }
}
