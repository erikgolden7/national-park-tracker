import React, { Component } from "react";

export default class ParkHistory extends Component {
  // componentDidMount() {
  //   if (!this.props.isAuthed) {
  //     window.location.href = process.env.REACT_APP_LOGIN;
  //   }
  // }

  handleSubmit(e) {
    e.preventdefault();
    console.log("submitted");
  }

  render() {
    return (
      <div>
        <h1>Add Entry</h1>
        <form onSubmit={this.handleSubmit}>
          <div>Park Name:</div>
          <input type="text" name="name" placeholder="Enter name..." />
          <div>Date Visited:</div>
          <input type="date" />
          <div>Image:</div>
          <input type="text" name="img" />
          <div>Notes:</div>
          <textarea name="message" rows="10" cols="60" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
