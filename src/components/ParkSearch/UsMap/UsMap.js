import React, { Component } from "react";
import USAMap from "react-usa-map";
import axios from "axios";
import './usMap.css'

class UsMap extends Component {

  mapHandler = event => {
    this.props.clearParks()
    this.props.setSelectedState(event.target.dataset.name);
    const id = event.target.dataset.name;
    axios.get(`/api/parks/${id}`).then(res => {
      this.props.setParks(res.data.data);
    });
  };

  render() {
    return (
      <div>
        {
          !this.props.toggle && !this.props.listToggle 
          ?
          <div className="header">
            <div className="image-small-header">
              <USAMap className="map" defaultFill="black" width={400} height={300} 
              onClick={(e) => {this.mapHandler(e) ; this.props.listSelect() ; this.props.select() }} />
            </div>
            <div className="right-header">
              <div className="park-title">
                {this.props.state.name}
              </div>
              <div className="sub-title">
                {this.props.state.designation}
              </div>  
              
              
            </div>
          </div>
          
          :
          <div className="image">
            <USAMap className="map" defaultFill="white" width={'100%'} height={500} 
            onClick={(e) => {this.mapHandler(e) ; this.props.listSelect() ; this.props.select() }} />
          </div>
        }
      </div>
    );
  }
}

export default UsMap;
