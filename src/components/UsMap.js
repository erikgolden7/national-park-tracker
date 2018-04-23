import React, { Component } from "react";
import USAMap from "react-usa-map";
import axios from "axios";
import './ParkSearch/parkSearch.css'

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
      <div>
        <div className="image">
          <USAMap className="map" defaultFill="white" width={800} height={600} 
          onClick={(e) => {this.mapHandler(e) ; this.props.listSelect() ; this.props.select() }} />
        </div>
      </div>
    );
  }
}

export default UsMap;
