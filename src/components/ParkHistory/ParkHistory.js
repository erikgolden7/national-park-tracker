import React, { Component } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import RaisedButton from "material-ui/RaisedButton";
import ParkForm from "./ParkForm/ParkForm";
import Percent from "./Percent/Percent";
import Dialog from "material-ui/Dialog";
import moment from "moment";

class ParkHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [],
      open: false,
      selectedPark: {},
      date: null
    };

    this.getHistory = this.getHistory.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  componentDidMount() {
    if (!this.props.isAuthed) {
      window.location.href = process.env.REACT_APP_LOGIN;
    } else {
      this.getHistory();
    }
  }

  handleOpen = e => {
    this.setState({ open: true, selectedPark: this.state.history[e] });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  formatDate(date) {
    return moment(date).format("LL");
  }

  getHistory() {
    axios.get(`/api/getHistory/${this.props.user.auth_id}`).then(res => {
      console.log(res.data);
      this.setState({ history: res.data });
    });
  }

  render() {
    const history = this.state.history.map((e, i) => {
      return (
        <TableRow key={i}>
          <TableRowColumn>{e.park_name}</TableRowColumn>
          <TableRowColumn>{this.formatDate(e.park_date)}</TableRowColumn>
          <TableRowColumn>{e.notes}</TableRowColumn>
        </TableRow>
      );
    });

    return (
      <div>
        <Percent user={this.props.user} />
        <ParkForm add={this.getHistory} />
        <Table
          fixedHeader={true}
          height={"60vh"}
          showCheckboxes={false}
          onRowSelection={this.handleOpen}
        >
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn
                colSpan="3"
                tooltip="Super Header"
                style={{ textAlign: "center" }}
              >
                My Park History
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn>Park Name</TableHeaderColumn>
              <TableHeaderColumn>Date of Visit</TableHeaderColumn>
              <TableHeaderColumn>Notes</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showRowHover={true}>
            {history}
          </TableBody>
        </Table>

        <Dialog
          title={this.state.selectedPark.park_name}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {moment(this.state.selectedPark.park_date).format(
            "dddd, MMMM Do YYYY"
          )}
          <br />
          <br />
          {this.state.selectedPark.notes}
          <br />
          <br />
          <RaisedButton label="Submit" primary={true} />
          <RaisedButton
            type="button"
            label="Cancel"
            onClick={this.handleClose}
          />
        </Dialog>
      </div>
    );
  }
}
export default ParkHistory;
