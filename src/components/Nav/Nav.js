import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>
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

          <Link to="/about" className="nav-item link-3">
            <div className="favorite-icon"></div>
            <div> Favorites </div>
          </Link>
        
        </nav>
      </div>
    );
  }
}
