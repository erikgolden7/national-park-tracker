import React, { Component } from "react";

export default class ParkAlerts extends Component {
  render() {
    return (
      <div key={this.props.i}>
        {this.props.e.category === "Danger" ? (
          <div>
            <div className="alert-item">
              <div className="danger" />
              <div className="alert-title" style={{ color: "#7A1F1A" }}>
                {this.props.e.title}
              </div>
            </div>
            <div className="alert-desc">{this.props.e.description}</div>
          </div>
        ) : this.props.e.category === "Caution" ? (
          <div>
            <div className="alert-item">
              <div className="caution" />
              <div className="alert-title" style={{ color: "#F7C746" }}>
                {this.props.e.title}
              </div>
            </div>
            <div className="alert-desc">{this.props.e.description}</div>
          </div>
        ) : this.props.e.category === "Information" ? (
          <div>
            <div className="alert-item">
              <div className="info" />
              <div className="alert-title" style={{ color: "#2057AA" }}>
                {this.props.e.title}
              </div>
            </div>
            <div className="alert-desc">{this.props.e.description}</div>
          </div>
        ) : this.props.e.category === "Park Closure" ? (
          <div>
            <div className="alert-item">
              <div className="closed" />
              <div className="alert-title" style={{ color: "#7A1F1A" }}>
                {this.props.e.title}
              </div>
            </div>
            <div className="alert-desc">{this.props.e.description}</div>
          </div>
        ) : (
          ""
        )}
        <hr />
      </div>
    );
  }
}
