import React, { Component } from "react";
import { Line } from "rc-progress";
import axios from "axios";
import "./percent.css";

export default class Percent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parkCount: 0,
      totalParkCount: 0,
      percent: 0,
      color: ""
    };
  }

  componentDidMount() {
    this.getAllParks();
  }

  getAllParks() {
    axios.get("/api/allParks").then(res => {
      this.setState({ totalParkCount: res.data.total });
      axios.get(`/api/favorite/${this.props.user.auth_id}`).then(res => {
        let parkCount = 0;
        res.data.map(e => parkCount++);
        const percent = Math.round(parkCount / this.state.totalParkCount * 100);
        this.setState({ percent, parkCount });
      });
    });
  }

  render() {
    return (
      <div>
        <div className="percent">
          <Line
            percent={this.state.percent}
            strokeLinecap="square"
            strokeWidth="4"
            trailWidth="0"
            strokeColor="#006CC0"
            style={{ width: "50%", margin: 20, border: "solid black 3px" }}
          />
          <span>{this.state.percent + "%"}</span>
        </div>

        <div>
          {`You have visited ${this.state.parkCount} out of ${
            this.state.totalParkCount
          } National Parks!`}
        </div>
      </div>
    );
  }
}
