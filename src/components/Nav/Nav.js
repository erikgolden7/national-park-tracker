import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RaisedButton from "material-ui/RaisedButton";
import "./nav.css";
export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    axios.get("/auth/me").then(res => {
      this.setState({ user: res.data[0] });
    });
  }

  render() {
    const btnStyle = {
      margin: "0 20px"
    };
    return (
      <div style={{ marginBottom: 60 }}>
        <nav className="nav">
          <div className="nav-left">
            <Link to="/" className="app-logo" />

            <Link to="/search" className="nav-item link-3">
              <div className="park-icon" />
              <div> Search Parks </div>
            </Link>
            {this.state.user.id ? (
              <Link to="/history" className="nav-item link-3">
                <div className="history-icon" />
                <div> Park History </div>
              </Link>
            ) : (
              ""
            )}

            {this.state.user.id ? (
              <Link to="/favorites" className="nav-item link-3">
                <div className="favorite-icon" />
                <div> Favorites </div>
              </Link>
            ) : (
              ""
            )}
            {this.state.user.id ? (
              <Link to="/favoriteMap" className="nav-item link-3">
                <div className="map-icon" />
                <div> Favorite Map </div>
              </Link>
            ) : (
              ""
            )}
          </div>

          <div className="nav-right">
            {!this.state.user.id ? (
              <RaisedButton
                label="Sign In"
                style={btnStyle}
                onClick={() =>
                  (window.location.href = process.env.REACT_APP_LOGIN)
                }
              />
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                Welcome {this.state.user.full_name}!
                <RaisedButton
                  label="Log Out"
                  style={btnStyle}
                  onClick={() =>
                    (window.location.href = process.env.REACT_APP_LOGOUT)
                  }
                />
              </div>
            )}
          </div>
        </nav>
      </div>
    );
  }
}
