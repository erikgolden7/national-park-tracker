import React, { Component } from 'react';
import ParkAlerts from './ParkAlerts';
import axios from 'axios';
import InfoMap from './InfoMap/InfoMap';
import banners from '../../../banners';
import swal from 'sweetalert2';
import './parkInfo.css';

export default class ParkInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alerts: [],
      user: {},
      favorites: []
    };
  }

  componentDidMount() {
    const code = this.props.state.parkCode;
    axios.get(`/api/alerts/${code}`).then(res => {
      this.setState({ alerts: res.data.data });
    });

    axios.get(`/api/favorite/${this.props.user}`).then(res => {
      this.setState({ favorites: res.data });
    });
  }

  visitPark(latLong, fullName, parkCode, url, description, states) {
    axios.get(`/api/favorite/${this.props.user.auth_id}`).then(res => {
      let favDouble = false;
      res.data.forEach((e, i) => {
        if (e.park_code === parkCode) {
          favDouble = true;
        }
      });

      if (favDouble === true) {
        swal({
          type: 'error',
          title: 'Oops...',
          text: `${fullName} is already in your favorites!`
        });
      } else {
        swal('Successfully added to favorites!', '', 'success');
        axios.post('api/addFavorite', {
          latLong,
          fullName,
          parkCode,
          url,
          description,
          states
        });
      }
    });
  }

  render() {
    console.log(this.props.state);

    const {
      description,
      latLong,
      name,
      fullName,
      parkCode,
      states,
      url,
      weatherInfo,
      directionsInfo
    } = this.props.state;

    const alert = this.state.alerts.map((e, i) => {
      return <ParkAlerts key={i} state={this.props.state} e={e} i={i} />;
    });

    return (
      <div className="desc-body">
        {this.state.alerts.length === 1 ? (
          <div className="alert">{this.state.alerts.length} ALERT IN EFFECT</div>
        ) : this.state.alerts.length > 1 ? (
          <div className="alert">{this.state.alerts.length} ALERTS IN EFFECT</div>
        ) : (
          ''
        )}
        {alert}
        {parkCode && <img src={banners[parkCode]} alt="Park" className="image-responsive" />}
        <div className="large-title-text"> Basic Information </div>
        <hr />
        <div className="text">{description}</div>
        <div className="large-title-text">Weather Information:</div>
        <hr />
        <div className="text">{weatherInfo}</div>
        <div className="large-title-text"> Additional Information: </div>
        <hr />
        <div className="text">
          <span style={{ fontWeight: 'bold' }}>States: </span>
          {states}
        </div>
        <div className="text">
          <span style={{ fontWeight: 'bold' }}> {name} Website: </span>
          <a style={{ color: 'darkBlue' }} target="_blank" href={url}>
            {url}
          </a>
        </div>
        <div className="text">
          <span style={{ fontWeight: 'bold' }}> Park Code: </span>
          {parkCode}
        </div>
        {this.props.state.latLong ? (
          <div className="text">
            <span style={{ fontWeight: 'bold' }}> Coordinates: </span> {latLong}
          </div>
        ) : (
          ''
        )}
        {this.props.state.directionsInfo ? (
          <div className="text">
            <span style={{ fontWeight: 'bold' }}> Directions: </span> {directionsInfo}
          </div>
        ) : (
          ''
        )}
        {this.props.user.auth_id ? (
          <div class="icon">
            <div
              class="fontawesome-heart button"
              onClick={() => this.visitPark(latLong, fullName, parkCode, url, description, states)}
            />
          </div>
        ) : (
          ''
        )}
        <button className="back-btn" onClick={this.props.select}>
          ⬅ Back
        </button>
        {this.props.state.latLong ? (
          <InfoMap state={this.props.state} style={{ width: '75%', height: 'auto', marginTop: '50px' }} />
        ) : (
          ''
        )}
      </div>
    );
  }
}
