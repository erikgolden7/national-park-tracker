import React, { Component } from 'react';
const axios = require('axios')

class ParkHistory extends Component {
constructor(props) {
  super(props);
  
  this.state = {
    history: []
  }
}

componentDidMount() {
  axios.get('/auth/me').then( res => {
    const id = res.data[0].auth_id
    axios.get(`/api/history/${id}`).then((res) => {
      this.setState({history: res.data})
    })
  })
}

  render() {
    console.log(this.state.history);

    const history = this.state.history.map((e, i) => {
      return (
        <div key={i}>
        {e.park_name}
        </div>
      )
    })
    
    return (
      <div>
        {history}
      </div>
    );
  }
}

export default ParkHistory
