import React, { Component } from "react";
import axios from "axios";
import TextField from "material-ui/TextField";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from "material-ui/DatePicker";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import "./parkForm.css"
import parks from "../../parkNames"

export default class ParkForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      date: null,
      image: "",
      notes: "",
      open: false,
      nameToggle: false,
      dateToggle: false
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

  handleSubmit(e) {
    const { name, date, image, notes } = this.state;
    this.setState({ nameToggle: false, dateToggle: false });
    if (!name && !date) {
      this.setState({ nameToggle: true, dateToggle: true });
    } else if (!name) {
      this.setState({ nameToggle: true });
    } else if (!date) {
      this.setState({ dateToggle: true });
    } else {
      axios.post("/api/addHistory", { name, date, image, notes }).then(res => {
        this.props.get();
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

  nameValidation() {
    if (this.state.nameToggle) {
      return (
        <TextField
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
          floatingLabelText="Park Name"
          errorText="This field is required"
        />
      );
    }
    return (
      <TextField
        value={this.state.name}
        onChange={this.handleChange}
        name="name"
        floatingLabelText="Park Name"
      />
    );
  }

  dateValidation() {
    if (this.state.dateToggle) {
      return (
        <DatePicker
          hintText="Visit Date"
          value={this.state.date}
          onChange={this.handleDateChange}
          name="date"
          errorText="This field is required"
        />
      );
    }
    return (
      <DatePicker
        hintText="Visit Date"
        value={this.state.date}
        onChange={this.handleDateChange}
        name="date"
      />
    );
  }

  render() {
    return (
      <div>
        <FloatingActionButton
          backgroundColor="#3CBC78"
          style={{ margin: 20 }}
          onClick={this.handleOpen}
        >
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
            {this.nameValidation()}
            <br />
            <br />
            {this.dateValidation()}

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
            <br />
            <RaisedButton
              type="submit"
              label="Submit"
              backgroundColor="#43A328"
              labelColor="#fff"
              style={{ marginRight: 20 }}
              onClick={() => this.props.add()}
            />
            <RaisedButton
              type="button"
              label="Cancel"
              backgroundColor="#DE4640"
              labelColor="#fff"
              onClick={this.handleClose}
            />
          </form>
        </Dialog>
      </div>
    );
  }
}
