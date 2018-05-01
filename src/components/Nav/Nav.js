import React, { Component } from 'react';
import {Link} from "react-router-dom"
import axios from 'axios'
import './nav.css'
require('dotenv').config()
export default class Nav extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      user : {}
    }
  }

  componentDidMount() {
    axios.get('/auth/me').then( res => {
      console.log(res.data)
      this.setState({user: res.data})
    })
  }    

  render() {
    console.log(this.state.user);
    
    return (
      <div>
        <nav className='nav'>

        <div className="nav-left">
          <Link to="/" className='app-logo' />

          <Link to="/history" className="nav-item link-3">
            <div className="history-icon"></div>
            <div> Park History </div>
          </Link>
            
          <Link to="/search" className="nav-item link-3">
            <div className="park-icon"></div>
            <div> Search Parks </div>
          </Link>

          <Link to="/badges" className="nav-item link-3">
            <div className="badge-icon"></div>
            <div> Junior Ranger </div>
          </Link>

          <Link to="/favorites" className="nav-item link-3">
            <div className="favorite-icon"></div>
            <div> Favorites </div>
          </Link>
        </div>
          
          <div className="nav-right">
            {
              !this.state.user.id ?
              <button className="login-btn" onClick={()=> window.location.href = process.env.REACT_APP_LOGIN }>Sign In</button>
              :
              <button className="login-btn" onClick={()=> window.location.href = process.env.REACT_APP_LOGOUT }>Sign Off</button>
            }
          </div>
          

        </nav>
      </div>
    );
  }
}
