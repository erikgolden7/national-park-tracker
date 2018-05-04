import React, { Component } from "react";
import { Redirect } from "react-router";
import parks from "./parksData";

import "./homePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  onButtonClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/search" />;
    }

    const preview = parks.map((e, i) => {
      return (
        <div className="container">
          <div className="content">
            <a href={e.url} rel="noopener noreferrer" target="_blank">
              <div className="content-overlay" />
              <img className="content-image" alt="park img" src={e.img} />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">{e.title}</h3>
                <p className="content-text">{e.state}</p>
              </div>
            </a>
          </div>
        </div>
      );
    });

    return (
      <div className="App">
        <div className="park-img">
          <div className="arrow" />
        </div>
        {preview}
        <button onClick={this.onButtonClick} type="button" className="show-btn">
          Explore More...
        </button>
      </div>
    );
  }
}

export default HomePage;
