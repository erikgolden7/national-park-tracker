import React, { Component } from "react";
import ParkForm from "./ParkForm/ParkForm";
import Percent from "./Percent/Percent";

export default class ParkHistory extends Component {
  componentDidMount() {
    if (!this.props.isAuthed) {
      window.location.href = process.env.REACT_APP_LOGIN;
    }
  }

  render() {
    return (
      <div>
        <Percent user={this.props.user} />
        <ParkForm />
      </div>
    );
  }
}
