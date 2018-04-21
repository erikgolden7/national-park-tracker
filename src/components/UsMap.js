import React, { Component } from "react";
import USAMap from "react-usa-map";
import axios from "axios";

class UsMap extends Component {
  mapHandler = event => {
    const id = event.target.dataset.name;
    axios.get(`/api/parks/${id}`).then(res => {
      console.log(res.data.data);
      this.props.setParks(res.data.data);
    });
  };

  render() {
    return (
      <div className="App">
        <USAMap height={500} onClick={this.mapHandler} />
      </div>
    );
  }
}

export default UsMap;
