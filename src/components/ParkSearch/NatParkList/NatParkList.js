import React, { Component } from 'react'
import ParkInfo from './ParkInfo/ParkInfo'
import './natParkList.css'

export default class NatParkList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      state: {}
    }
  }
  
  render () {
    const parkList = this.props.parkList.map((e, i) => {
      return (
        <div key={i}>
          <div className="park-list-item" onClick={() => {this.props.selectPark(e) ; this.props.select()}}>
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
            <ParkInfo select={this.props.select} state={this.props.state}/>
          </div>
          :
          <div>Select a state and park from the map above to view details.</div>
        }
      </div>
    )
  }
}
