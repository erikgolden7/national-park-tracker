import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";
import TextField from "material-ui/TextField";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from "material-ui/DatePicker";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

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
    this.setState({ date });
  };

  formWarning(type) {
    return swal({
      position: "top-end",
      type: "warning",
      title: "Oops...",
      text: type,
      showConfirmButton: false,
      timer: 1500
    });
  }

  handleSubmit(e) {
    const { name, date, image, notes } = this.state;

    if (!name && !date) {
      this.formWarning("Must enter a name and date!");
    } else if (!name) {
      this.formWarning("Must enter a park name!");
    } else if (!date) {
      this.formWarning("Must enter a date!");
    } else {
      axios.post("/api/addHistory", { name, date, image, notes }).then(res => {
        console.log(res);
      });
      this.setState({
        open: false,
        name: "",
        date: null,
        image: "",
        notes: ""
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <FloatingActionButton style={{ margin: 20 }} onClick={this.handleOpen}>
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
              onClick={() => this.props.add()}
            />
            <RaisedButton
              type="button"
              label="Cancel"
              onClick={this.handleClose}
            />
          </form>
        </Dialog>
      </div>
    );
  }
}
