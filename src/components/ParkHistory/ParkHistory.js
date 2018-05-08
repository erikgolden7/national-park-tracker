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

  delete(user, e) {
    console.log(user.auth_id, e);
    console.log(this.state.selectedPark);
    axios
      .delete(
        `/api/delete?user=${this.props.user.auth_id}&id=${
          this.state.selectedPark.id
        }`
      )
      .then(res => {
        this.setState({ history: res.data });
        this.getHistory();
        this.handleClose();
      });
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
        <TableRow key={i} style={{ cursor: "pointer" }}>
          <TableRowColumn>{e.park_name}</TableRowColumn>
          <TableRowColumn>{moment(e.park_date).format("LL")}</TableRowColumn>
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
                style={{
                  textAlign: "center",
                  fontSize: 32,
                  color: "gray"
                }}
              >
                My Park History
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn
                style={{
                  fontSize: 18,
                  background: "#969696",
                  color: "white"
                }}
              >
                Park Name
              </TableHeaderColumn>
              <TableHeaderColumn
                style={{
                  fontSize: 18,
                  background: "#969696",
                  color: "white"
                }}
              >
                Date of Visit
              </TableHeaderColumn>
              <TableHeaderColumn
                style={{
                  fontSize: 18,
                  background: "#969696",
                  color: "white"
                }}
              >
                Notes
              </TableHeaderColumn>
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
          <RaisedButton
            label="Delete"
            labelColor="#fff"
            backgroundColor="#A52C24"
            style={{ marginRight: 20 }}
            onClick={e => this.delete(this.props.user, e)}
          />
          <RaisedButton
            type="button"
            label="Close"
            onClick={this.handleClose}
          />
        </Dialog>
      </div>
    );
  }
}
export default ParkHistory;
