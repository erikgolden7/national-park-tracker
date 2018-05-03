import React, { Component } from "react";

export default class Badges extends Component {
  componentDidMount() {
    if (!this.props.isAuthed) {
      window.location.href = process.env.REACT_APP_LOGIN;
    }
  }

  render() {
    return <div>Badges</div>;
  }
}
