import React, { Component } from "react";
import { Redirect } from "react-router";

import "./homePage.css";
import tortugas from "../../assets/parks/tortugas.jpg";
import royale from "../../assets/parks/royale.jpg";
import channelislands from "../../assets/parks/channelislands.jpg";
import guadalupe from "../../assets/parks/guadalupe.jpg";
import sanddunes from "../../assets/parks/sanddunes.jpg";
import cascades from "../../assets/parks/cascades.jpg";
import gates from "../../assets/parks/gates.jpg";
import congaree from "../../assets/parks/congaree.jpg";
import basin from "../../assets/parks/basin.jpg";
import lassen from "../../assets/parks/lassen.jpg";
import grandcanyon from "../../assets/parks/grandcanyon.jpg";
import yellowstone from "../../assets/parks/yellowstone.jpg";

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

    const parks = [
      {
        url: "https://www.nps.gov/drto/index.htm",
        img: tortugas,
        title: "Dry Tortugas National Park",
        state: "Florida"
      },
      {
        url: "https://www.nps.gov/yell/index.htm",
        img: yellowstone,
        title: "Yellowstone National Park",
        state: "Wyoming"
      },
      {
        url: "https://www.nps.gov/gumo/index.htm",
        img: guadalupe,
        title: "Guadalupe Mountains National Park",
        state: "Texas"
      },
      {
        url: "https://www.nps.gov/grsa/index.htm",
        img: sanddunes,
        title: "Great Sand Dunes National Park",
        state: "Colorado"
      },
      {
        url: "https://www.nps.gov/noca/index.htm",
        img: cascades,
        title: "North Cascades National Park",
        state: "Washington"
      },
      {
        url: "https://www.nps.gov/gaar/index.htm",
        img: gates,
        title: "Gates of the Arctic National Park",
        state: "Alaska"
      },
      {
        url: "https://www.nps.gov/cong/index.htm",
        img: congaree,
        title: "Congaree National Park",
        state: "South Carolina"
      },
      {
        url: "https://www.nps.gov/grba/index.htm",
        img: basin,
        title: "Great Basin National Park",
        state: "Nevada"
      },
      {
        url: "https://www.nps.gov/chis/index.htm",
        img: channelislands,
        title: "Channel Islands National Park",
        state: "California"
      },
      {
        url: "https://www.nps.gov/lavo/index.htm",
        img: lassen,
        title: "Lassen Volcanic National Park",
        state: "California"
      },
      {
        url: "https://www.nps.gov/grca/index.htm",
        img: grandcanyon,
        title: "Grand Canyon National Park",
        state: "Arizona"
      },
      {
        url: "https://www.nps.gov/isro/index.htm",
        img: royale,
        title: "Isle Royale National Park",
        state: "Michigan"
      }
    ];

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
