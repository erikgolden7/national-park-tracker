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
    const code = this.props.state.parkCode
    axios.get(`/api/alerts/${code}`)
    .then((res) => {
      this.setState({alerts: res.data.data})
    })
  }

  render() {
    const {description, latLong, name, parkCode, states, url, weatherInfo} = this.props.state;
    
    const alert = this.state.alerts.map((e, i) => {  
      
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
        <hr/>
        {
          //parkCode &&
          // <img style={{textAlign:"left"}} src={require(`../../assets/parks/${parkCode}.jpg`)} alt="Park Image" className="img-responsive"/>
        }
        <div className="text">{description}</div>
        <div className="large-title-text" >Weather Information:</div>
        <hr/>
        <div className="text">{weatherInfo}</div>
        <div className="large-title-text"> Additional Information: </div>
        <hr/>
        <div className="text">
          <span style={{fontWeight:"bold"}}>States: </span>{states}
        </div>
        <div className="text">
          <span style={{fontWeight:'bold'}}> {name} Website: </span><a style={{color:"darkBlue"}} target="_blank" href={url}>{url}</a> 
        </div>
        <div className="text">
          <span style={{fontWeight:"bold"}}> Park Code: </span>{parkCode}
        </div>
        {
          this.props.state.latLong ? 
          <div className="text">
          <span style={{fontWeight:'bold'}}> Coordinates: </span> {latLong}
          </div>
          :
          ''
        }
        <button className="back-btn" onClick={this.props.select} > ⬅ Back </button>
        {
          this.props.state.latLong ? 
            <GoogleMap state={this.props.state} style={{width:"75%", height: "auto", marginTop:'50px'}} />
          :
          ''
        }
      </div>
    );
  }
}
