import React, { Component } from "react";
import axios from "axios";
import TextField from "material-ui/TextField";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from "material-ui/DatePicker";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export default class ParkForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      date: null,
      image: "",
      notes: "",
      open: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleDateChange = (e, date) => {
    this.setState({
      date: date
    });
  };

  handleSubmit(e) {
    const { name, date, image, notes } = this.state;
    axios.post("/api/addHistory", { name, date, image, notes }).then(res => {
      console.log(res);
    });
    e.preventDefault();
  }

  render() {
    // const actions = [
    //   <FlatButton
    //     label="Ok"
    //     primary={true}
    //     keyboardFocused={true}
    //     onClick={this.handleClose}
    //   />
    // ];

    return (
      <div>
        <FloatingActionButton onClick={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Add Park History"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Open a Date Picker dialog from within a dialog.
          <form onSubmit={this.handleSubmit}>
            <TextField
              hintText="Hint Text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              floatingLabelText="Park Name"
            />
            <br />
            <br />
            <DatePicker
              hintText="Visit Date"
              value={this.state.date}
              onChange={this.handleDateChange}
              name="date"
            />

            <TextField
              hintText="Hint Text"
              value={this.state.image}
              onChange={this.handleChange}
              name="image"
              floatingLabelText="Upload Image"
            />
            <br />

            <TextField
              hintText="Hint Text"
              value={this.state.notes}
              onChange={this.handleChange}
              name="notes"
              floatingLabelText="Additional Notes..."
            />
            <br />
            <br />
            <RaisedButton
              type="submit"
              label="Submit"
              primary={true}
              // keyboardFocused={true}
              onClick={this.handleClose}
            />
          </form>
        </Dialog>
      </div>
    );
  }
}
