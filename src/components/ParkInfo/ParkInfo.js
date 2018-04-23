import React, { Component } from 'react';
import axios from "axios";
import "./parkInfo.css"

export default class ParkInfo extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      alerts: []
    }
  }
  
  componentDidMount() {
    const code = this.props.state.parkCode
    axios.get(`/api/alerts/${code}`)
    .then((res) => {
      this.setState({alerts: res.data.data})
    })
  }

  render() {
    console.log(this.state.alerts.length);
    const {description, designation, directionsInfo, fullName, id, latLong, name, parkCode, states, url, weatherInfo} = this.props.state;
    
    const alert = this.state.alerts.map((e) => {  
      console.log(e, e.title, e.category);
      <div>
        <div className="danger" />
        <div className="info" />
        <div className="caution" />
      
      </div>
    })

    return (
      <div className="desc-body">
        {
          this.state.alerts.length === 1 ?
          <div className="alert">{this.state.alerts.length} ALERT IN EFFECT</div> 
          : this.state.alerts.length > 1 ? 
          <div className="alert">{this.state.alerts.length} ALERTS IN EFFECT</div> 
          : ''
        }
        {alert}

        <hr/>
        <div>{designation}</div>
        <div>{description}</div>
        <div>{id}</div>
        <div>{latLong}</div>
        <div>{name}</div>
        <div>{parkCode}</div>
        <div>{states}</div>
        <div>{url}</div>
        <div>{weatherInfo}</div>
      </div>
    );
  }
}

// description
// :
// "Within the dry and windswept high plains of the Texas Panhandle lies a hidden oasis, a welcoming haven where wildlife and humans find respite from the dry grasslands above. Through this plain, the Canadian River has cut dramatic 200-foot canyons, or breaks, where humans have eked out a living for over 13,000 years. Lake Meredith now occupies these hidden coves where early humans once roamed."
// designation
// :
// "National Recreation Area"
// directionsInfo
// :
// "There are several different ways to get to Lake Meredith. If you are coming from Amarillo, exit Loop 335 North, then exit Hwy 136 North to Fritch. Headquarters is located at 419 E. Broadway in Fritch. If coming from the North you can take 1913 from the Dumas Highway or 1913 from US 287.↵↵The airport in Amarillo is approximately 35 miles south of Lake Meredith if traveling by air. Rental cars are available."
// directionsUrl
// :
// "http://www.nps.gov/lamr/planyourvisit/directions.htm"
// fullName
// :
// "Lake Meredith National Recreation Area"
// id
// :
// "AC3B46AA-B4C2-4555-A82A-D4CF790DF81D"
// latLong
// :
// "lat:35.61926203, long:-101.6820066"
// name
// :
// "Lake Meredith"
// parkCode
// :
// "lamr"
// states
// :
// "TX"
// url
// :
// "https://www.nps.gov/lamr/index.htm"
// weatherInfo
