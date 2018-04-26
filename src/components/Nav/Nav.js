import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <header className='App-header nav'>
          <Link className="nav-link" to="/info">Park History</Link>
          <Link className="nav-link" to="/search">Search Parks</Link>
          <Link to="/" className='app-logo' />
          <Link to="/badges" className="nav-link">Junior Ranger Badges</Link>
          <Link to="/about" className="nav-link">Favorites</Link>
        </header>
      </div>
    );
  }
}
