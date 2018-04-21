import React, { Component } from 'react'

export default class NatParkList extends Component {

  selectPark (state) {
    console.log('value', state)
  }

  render () {
    const parkList = this.props.parkList.map((e, i) => {
      console.log(e)
      return (
        <div key={i}>
          <div onClick={() => this.selectPark(e)}>
            {e.fullName}
          </div>
        </div>
      )
    })

    return (
      <div>
        {parkList}
      </div>
    )
  }
}
