import React, { Component } from "react";
import axios from "axios";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import Percent from "./Percent/Percent";

export default class ParkHistory extends Component {
  componentDidMount() {
    if (!this.props.isAuthed) {
      window.location.href = process.env.REACT_APP_LOGIN;
    }
  }

  handleSubmit(e) {
    e.preventdefault();
    console.log("submitted");
  }

  render() {
    return (
      <div>
        <Percent user={this.props.user} />
        <h1>Add Entry</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField hintText="Hint Text" floatingLabelText="Park Name" />
          <br />
          <br />
          <DatePicker hintText="Visit Date" openToYearSelection={true} />

          <TextField hintText="Hint Text" floatingLabelText="Upload Image" />
          <br />

          <TextField
            hintText="Hint Text"
            floatingLabelText="Additional Notes..."
          />
          <br />
          <RaisedButton type="submit" label="Submit" />
        </form>
      </div>
    );
  }
}
