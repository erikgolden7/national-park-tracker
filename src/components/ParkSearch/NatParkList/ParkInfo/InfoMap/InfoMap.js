// import React, { Component } from 'react';
// import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
// import axios from "axios"
// require('dotenv').config()

// const LoadingContainer = (props) => (
//   <div>Fancy loading container!</div>
// )
// class GoogleMap extends Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       map: '',
//       lat: '',
//       lng: '',
//       zoom: 10,
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {}
//     }
//   }

//   componentDidMount() {
//     axios.get('/api/googleMap').then((res)=>{
//       console.log(res);
//       this.setState({map: res})
//     })
//     this.findLatLong()
//   }

//   findLatLong(){
//     let lat = '';
//     let lng = '';
//     const str = this.props.state.latLong.split('')
//     lat = str.splice(4, 8);
//     lng = str.splice(14, 8);
//     this.setState({lat: Number(lat.join('')), lng: Number(lng.join(''))})
//   }

//   onMarkerClick = (props, marker, e) =>{
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//   }

//   onMapClicked = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       })
//     }
//   };

//   render() {
//     const style = {
//       position: 'relative',
//       width: '75%',
//       height: '500px'
//     }
//     return (
//       <Map google={this.props.google} zoom={this.state.zoom} style={style} center={{lat: this.state.lat, lng: this.state.lng}} mapTypeId='terrain' onClick={this.onMapClicked} >      
//         <Marker
//           url={this.props.state.url}
//           title={'Select to view NPS website data.'}
//           name={this.props.state.name}
//           position={{lat: this.state.lat, lng: this.state.lng}} 
//           onClick={this.onMarkerClick}
//         />  
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}>
//             <div>
//               <h3>{this.state.selectedPlace.name}</h3>
//             </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: process.env.REACT_APP_MAP_KEY,
//   LoadingContainer: LoadingContainer
// })(GoogleMap)



import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import axios from 'axios'


class InfoMap extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      lat: '',
      lng: ''
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
    const str = this.props.state.latLong
    let lat = str.slice(str.indexOf('lat:')+4, 15)
    let lng = str.slice(str.indexOf('long:')+5)
    this.setState({lat: Number(lat), lng: Number(lng)})
  }

   render() {
     const {lat, lng} = this.state

    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{lat, lng}}
    >
      {props.isMarkerShown && <Marker position={{lat, lng}} />}
    </GoogleMap>
  ))
    
    return(
      <MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `600px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
    );
   }
};
export default InfoMap;
