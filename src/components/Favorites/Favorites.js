import React, { Component } from 'react';
import axios from 'axios';
import './favorites.css'


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

  removeFavorite(parkCode) {
    axios.delete(`/api/removeFavorite?id=${this.props.user.auth_id}&parkCode=${parkCode}`).then((res)=>{
      axios.get(`/api/favorite/${this.props.user.auth_id}`).then((res) => {
        this.setState({favorite: res.data})
      })
    })
  }

  render() {

    const favorite = this.state.favorite.map((e, i) => {
      return (
        <div key={i} className="fav-card">
          <div className="card-header">
            {e.park_name}
            <div className="delete" onClick={()=>this.removeFavorite(e.park_code)}/>
          </div>
          <div className="fav-info">{e.description}</div>
          <div className="fav-info">Coordinates: {e.coordinates}</div>
          <div className="fav-info">States: {e.states}</div>
          <a className="fav-info" style={{color:"black"}} target="_blank" href={e.url}>{e.url}</a> 
        </div>
      )
    })
    
    return (
      <div className="cards">
        {favorite}
      </div>
    );
  }
}

export default Favorites
