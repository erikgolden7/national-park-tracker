import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <header className='App-header nav'>
          <Link to="/" className='app-logo' />

          <Link to="/history" className="nav-item">
            <div className="history-icon"></div>
            <div> Park History </div>
          </Link>
            
          <Link to="/search" className="nav-item">
            <div className="park-icon"></div>
            <div> Search Parks </div>
          </Link>

          <Link to="/badges" className="nav-item">
            <div className="badge-icon"></div>
            <div> Junior Ranger </div>
          </Link>

          <Link to="/about" className="nav-item">
            <div className="favorite-icon"></div>
            <div> Favorites </div>
          </Link>
        
        </header>
      </div>
    );
  }
}
