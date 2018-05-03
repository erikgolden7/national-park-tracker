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
  if(!this.props.isAuthed){
    window.location.href = process.env.REACT_APP_LOGIN
  }
  axios.get(`/api/favorite/${this.props.user.auth_id}`).then((res) => {
    this.setState({favorite: res.data})
  })
}

  render() {

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
