import React, { Component } from 'react';
const axios = require('axios')

class Favorites extends Component {
constructor(props) {
  super(props);
  
  this.state = {
    favorite: []
  }
}

componentDidMount() {
  axios.get('/auth/me').then( res => {
    const id = res.data[0].auth_id
    axios.get(`/api/favorite/${id}`).then((res) => {
      this.setState({favorite: res.data})
    })
  })
}

  render() {
    console.log(this.state.favorite);

    const favorite = this.state.favorite.map((e, i) => {
      return (
        <div key={i}>
        {e.park_name}
        </div>
      )
    })
    
    return (
      <div>
        {favorite}
      </div>
    );
  }
}

export default Favorites
