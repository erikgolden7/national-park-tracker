import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { Redirect } from 'react-router';

import './homePage.css'
import tortugas from "../../assets/parks/tortugas.jpg"
import royale from "../../assets/parks/royale.jpg"
import channelislands from "../../assets/parks/channelislands.jpg"
import guadalupe from "../../assets/parks/guadalupe.jpg"
import sanddunes from "../../assets/parks/sanddunes.jpg"
import cascades from "../../assets/parks/cascades.jpg"
import gates from "../../assets/parks/gates.jpg"
import congaree from "../../assets/parks/congaree.jpg"
import basin from "../../assets/parks/basin.jpg"
import lassen from "../../assets/parks/lassen.jpg"
import grandcanyon from "../../assets/parks/grandcanyon.jpg"
import yellowstone from "../../assets/parks/yellowstone.jpg"

class HomePage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      redirect: false
    }
  }
  

  onButtonClick = () => {
    this.setState({redirect: true});
  }

  render () {
    if (this.state.redirect) {
      return <Redirect push to="/search" />;
    }
    return (
      <div className='App'>
        <div className="park-img">
          <div className="arrow" />
        </div>
        <div className="container">
          <div className="content">
            <a href="https://www.nps.gov/drto/index.htm" target="_blank">
              <div className="content-overlay" />
              <img className="content-image" src={tortugas} />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Dry Tortugas National Park</h3>
                <p className="content-text">Florida</p>
              </div>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <a href="https://www.nps.gov/yell/index.htm" target="_blank">
              <div className="content-overlay" />
              <img className="content-image" src={yellowstone} />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Yellowstone National Park</h3>
                <p className="content-text">Wyoming</p>
              </div>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <a href="https://www.nps.gov/gumo/index.htm" target="_blank">
              <div className="content-overlay" />
              <img className="content-image" src={guadalupe} />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Guadalupe Mountains National Park</h3>
                <p className="content-text">Texas</p>
              </div>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <a href="https://www.nps.gov/grsa/index.htm" target="_blank">
              <div className="content-overlay" />
              <img className="content-image" src={sanddunes} />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Great Sand Dunes National Park</h3>
                <p className="content-text">Colorado</p>
              </div>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <a href="https://www.nps.gov/noca/index.htm" target="_blank">
              <div className="content-overlay" />
              <img className="content-image" src={cascades} />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">North Cascades National Park</h3>
                <p className="content-text">Washington</p>
              </div>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <a href="https://www.nps.gov/gaar/index.htm" target="_blank">
              <div className="content-overlay" />
              <img className="content-image" src={gates} />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Gates of the Arctic National Park</h3>
                <p className="content-text">Alaska</p>
              </div>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <a href="https://www.nps.gov/cong/index.htm" target="_blank">
              <div className="content-overlay" />
              <img className="content-image" src={congaree} />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Congaree National Park</h3>
                <p className="content-text">South Carolina</p>
              </div>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <a href="https://www.nps.gov/grba/index.htm" target="_blank">
              <div className="content-overlay" />
              <img className="content-image" src={basin} />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Great Basin National Park</h3>
                <p className="content-text">Nevada</p>
              </div>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <a href="https://www.nps.gov/chis/index.htm" target="_blank">
              <div className="content-overlay" />
              <img className="content-image" src={channelislands} />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Channel Islands National Park</h3>
                <p className="content-text">California</p>
              </div>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <a href="https://www.nps.gov/lavo/index.htm" target="_blank">
              <div className="content-overlay" />
              <img className="content-image" src={lassen} />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Lassen Volcanic National Park</h3>
                <p className="content-text">California</p>
              </div>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <a href="https://www.nps.gov/grca/index.htm" target="_blank">
              <div className="content-overlay" />
              <img className="content-image" src={grandcanyon} />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Grand Canyon National Park</h3>
                <p className="content-text">Arizona</p>
              </div>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <a href="https://www.nps.gov/isro/index.htm" target="_blank">
              <div className="content-overlay" />
              <img className="content-image" src={royale} />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Isle Royale National Park</h3>
                <p className="content-text">Michigan</p>
              </div>
            </a>
          </div>
        </div>
        <button onClick={this.onButtonClick} type="button" className="show-btn">Show More...</button>
      </div>
    )
  }
}

export default HomePage
