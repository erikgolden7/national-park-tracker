import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/index.css'
import App from './components/App'
import Nav from './components/Nav/Nav'

ReactDOM.render(
  <Router>
    <div>
      <Nav />
      <App />
    </div>
    
  </Router>

  , document.getElementById('root'))
