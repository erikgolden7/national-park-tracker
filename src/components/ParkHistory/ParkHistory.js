import React, { Component } from 'react';

export default class ParkHistory extends Component {

  componentDidMount() {
    if(!this.props.isAuthed){
      window.location.href = process.env.REACT_APP_LOGIN
    }
  }
  

  render() {
    return (
      <div>History</div>
    );
  }
}
