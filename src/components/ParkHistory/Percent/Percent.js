import React, { Component } from "react";
import { Line, Circle } from "rc-progress";
import axios from "axios";

export default class Percent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: 0,
      color: ""
    };
  }

  componentDidMount() {
    this.getAllParks();
  }

  getAllParks() {
    axios.get("/api/allParks").then(res => {
      const totalParkCount = res.data.total;
      axios.get(`/api/favorite/${this.props.user.auth_id}`).then(res => {
        let count = 0;
        res.data.map(e => count++);
        const percent = Math.round(count / totalParkCount * 100);

        this.setState({ percent: percent });
      });
    });
  }

  render() {
    console.log("====================================");
    console.log(this.state.percent);
    console.log("====================================");
    return (
      <div>
        <Line
          percent={this.state.percent}
          strokeLinecap="round"
          strokeWidth="4"
          strokeColor="#D3D3D3"
          style={{ width: "50%", margin: 20 }}
        />
        <span>{this.state.percent + "%"}</span>
      </div>
    );
  }
}
