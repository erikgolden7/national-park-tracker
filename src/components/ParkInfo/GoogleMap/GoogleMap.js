import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from "axios"
import { toLong } from 'ip';
require('dotenv').config()

class GoogleMap extends Component {
constructor(props) {
  super(props);
  
  this.state = {
    map: '',
    lat: '',
    lng: '',
    zoom: 10
  }
}

componentDidMount() {
  axios.get('/api/googleMap').then((res)=>{
    console.log(res);
    this.setState({map: res})
  })
  this.findLatLong()
}

findLatLong(){
  let lat = '';
  let lng = '';
  const str = this.props.latLong.split('')
  lat = str.splice(4, 8);
  lng = str.splice(14, 8);
  this.setState({lat: Number(lat.join('')), lng: Number(lng.join(''))})
}

onMarkerClick(props, marker, e){
  console.log(e);
  console.log(props);
  console.log(marker);
  
  
  
}

  render() {
    const style = {
      width: '500px',
      height: '400px'
    }
    console.log(this.state.lat, this.state.lng)
    return (
      <Map google={this.props.google} zoom={this.state.zoom} style={style} center={{lat: this.state.lat, lng: this.state.lng}} >
        <Marker
          title={'Select to view NPS website data.'}
          name={this.props.name}
          position={{lat: this.state.lat, lng: this.state.lng}} 
          onClick={this.onMarkerClick}
        />  

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>place</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_KEY
})(GoogleMap)
