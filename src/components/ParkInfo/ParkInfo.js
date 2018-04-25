import React, { Component } from 'react';
import axios from "axios";
import GoogleMap from "./GoogleMap/GoogleMap"
import "./parkInfo.css"

export default class ParkInfo extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      alerts: []
    }
  }
  
  componentDidMount() {
    console.log(this.props.state.image);
    const code = this.props.state.parkCode
    axios.get(`/api/alerts/${code}`)
    .then((res) => {
      this.setState({alerts: res.data.data})
    })
  }

  render() {

    const {description, designation, id, latLong, name, parkCode, states, url, weatherInfo} = this.props.state;
    
    const alert = this.state.alerts.map((e, i) => {  
      console.log(e, e.title, e.category);
      
      return(
      <div key={i}>
      {

        e.category === "Danger" ?
        <div>
          <div className="alert-item">
            <div className="danger" />
            <div className="alert-title" style={{color: '#7A1F1A'}}>
              {e.title}
            </div>
          </div>
          <div className="alert-desc">
            {e.description}
          </div>
        </div>

        : e.category === "Caution" ?
        <div>
          <div className="alert-item">
            <div className="caution" />
            <div className="alert-title" style={{color: '#F7C746'}}>
              {e.title}
            </div>
          </div>
          <div className="alert-desc">
            {e.description}
          </div>
        </div>
        : e.category === "Information" ?
        <div>
          <div className="alert-item">
            <div className="info" />
            <div className="alert-title" style={{color: '#2057AA'}}>
              {e.title}
            </div>
          </div>
          <div className="alert-desc">
            {e.description}
          </div>
        </div>
        : e.category === "Park Closure" ?
        <div>
          <div className="alert-item">
            <div className="closed" />
            <div className="alert-title" style={{color: '#7A1F1A'}}>
              {e.title}
            </div>
          </div>
          <div className="alert-desc">
            {e.description}
          </div>
        </div>
        : ''
      }
      <hr/>
      </div>
    )})

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
        
        <div className="large-title-text" > Basic Information </div>
        {
          //parkCode &&
          // <img style={{textAlign:"left"}} src={require(`../../assets/parks/${parkCode}.jpg`)} alt="Park Image" className="img-responsive"/>

        }
        <div className="text">{description}</div>

        <div>{designation}</div>
        <GoogleMap name={name} latLong={latLong} />
        
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
