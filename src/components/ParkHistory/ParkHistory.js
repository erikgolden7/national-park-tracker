import React, { Component } from "react";
import axios from "axios";
import ParkForm from "./ParkForm/ParkForm";
import Percent from "./Percent/Percent";

export default class ParkHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: []
    };

    this.getHistory = this.getHistory.bind(this);
  }

  componentDidMount() {
    if (!this.props.isAuthed) {
      window.location.href = process.env.REACT_APP_LOGIN;
    } else {
      this.getHistory();
    }

    // axios.get("/api/getHistory").then(res => {
    //   this.setState({ history: res.data });
    // });
  }

  getHistory() {
    axios.get(`/api/getHistory/${this.props.user.auth_id}`).then(res => {
      console.log(res.data);
      this.setState({ history: res.data });
    });
  }

  render() {
    const history = this.state.history.map((e, i) => {
      return <div key={i}>{e.park_name}</div>;
    });

    return (
      <div>
        <Percent user={this.props.user} />
        <ParkForm add={this.getHistory} />
        {history}
      </div>
    );
  }
}
