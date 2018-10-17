import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import axios from "axios";

class InfoMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: "",
      lng: ""
    };
  }

  componentDidMount() {
    axios.get("/api/googleMap").then(res => {
      console.log(res);
      this.setState({ map: res });
    });
    this.findLatLong();
  }

  findLatLong() {
    const str = this.props.state.latLong;
    let lat = str.slice(str.indexOf("lat:") + 4, 15);
    let lng = str.slice(str.indexOf("long:") + 5);
    this.setState({ lat: Number(lat), lng: Number(lng) });
  }

  render() {
    const { lat, lng } = this.state;

    const MyMapComponent = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat, lng }}>
          {props.isMarkerShown && <Marker position={{ lat, lng }} />}
        </GoogleMap>
      ))
    );

    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
          process.env.REACT_APP_MAP_KEY
        }&callback=initMap`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
export default InfoMap;
