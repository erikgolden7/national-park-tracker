import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './natParkList.css'

export default class NatParkList extends Component {

  selectPark (state) {
    console.log('value', state)
  }

  render () {
    const parkList = this.props.parkList.map((e, i) => {
      console.log(e)
      return (
        <div key={i}>
          <div className="park-list-item" onClick={() => this.selectPark(e)}>
            <Link to="info">{e.fullName}</Link>
          </div>
        </div>
      )
    })

    return (
      <div className='park-list'>
        {parkList}
      </div>
    )
  }
}
