import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import axios from "axios"
require('dotenv').config()

const LoadingContainer = (props) => (
  <div>Loading...</div>
)
class GoogleMap extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      favorite : [],
      coordinates: [],
      zoom: 5,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  componentWillMount() {
    if(!this.props.isAuthed){
      window.location.href = process.env.REACT_APP_LOGIN
    }

    axios.get('/auth/me').then( res => {
      const id = res.data[0].auth_id
      axios.get(`/api/favorite/${id}`).then((res) => {
        this.setState({favorite: res.data})
      })
    })
  }

  findLatLong(coordinate){
    let lat = coordinate.slice(coordinate.indexOf('lat:')+4, 15)
    let lng = coordinate.slice(coordinate.indexOf('long:')+5)
    return {lat, lng}
  }

  onMarkerClick = (props, marker, e) =>{
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {

    const style = {
      width: '100%',
      height: '100vh'
    }

    const marker = this.state.favorite.map((e,i)=>{
      console.log(e);
      return (
        <Marker
          key={i}
          title={e.park_name}
          position={this.findLatLong(e.coordinates)}
          onClick={this.onMarkerClick}
        />  
      )
    })

    return (
      <Map 
        google={this.props.google} 
        zoom={this.state.zoom} 
        style={style} 
        initialCenter={{lat: 38.0902,lng: -95.7129}} 
        onClick={this.onMapClicked} 
      >
        {marker}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h3>{this.state.selectedPlace.title}</h3>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_KEY,
  LoadingContainer: LoadingContainer
})(GoogleMap)






// import React, { Component } from 'react';
// import axios from 'axios'
// import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow, FaAnchor} from "react-google-maps"
// // import { InfoBox } from "../../../node_modules/react-google-maps/lib/components/addons/InfoBox"

// class HistoryMap extends Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       history : [],
//       isOpen: false
//     }

//     this.onToggleOpen = this.onToggleOpen.bind('this')
//   }

//   componentDidMount() {
//     axios.get('/auth/me').then( res => {
//       const id = res.data[0].auth_id
//       axios.get(`/api/history/${id}`).then((res) => {
//         this.setState({history: res.data})
//       })
//     })
//   }
    
//   findLatLong(coordinate){
//       let tempLat = coordinate.split('').splice(4, 8)
//       let tempLng = coordinate.split('').splice(22, 9)
//       let lat = Number(tempLat.join(''))
//       let lng = Number(tempLng.join(''))
//       return {lat, lng}
//   }

//   onToggleOpen() {
//     console.log("toggle fired");
    
//     this.setState({isOpen: !this.state.isOpen})
//   }

//   render() {

//     const marker = this.state.history.map((e,i)=>{
//       console.log(this.state.isOpen);
//       return (
//         <Marker
//           key={i}
//           position={this.findLatLong(e.coordinates)}
//           onClick={this.props.toggle}
//         >
//         {this.state.isOpen && <InfoWindow onCloseClick={this.onToggleOpen}>
//           <FaAnchor />
//         </InfoWindow>}
//         </Marker>  
//       )
//     })

//     const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//     <GoogleMap
//       toggle={this.onToggleOpen}
//       defaultZoom={5}
//       defaultCenter={{ lat: 38.0902,lng: -95.7129 }}
//     >
//       {marker}
//     </GoogleMap>
//   ))

//     return (
//       <MyMapComponent
//         toggle={this.onToggleOpen}
//         isOpen={this.state.isOpen}
//         isMarkerShown
//         googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `750px` }} />}
//         mapElement={<div style={{ height: `100%`, width:'85%', margin: 'auto', marginTop:80 }} />}
//       />
//     );
//   }
// }

// export default HistoryMap

