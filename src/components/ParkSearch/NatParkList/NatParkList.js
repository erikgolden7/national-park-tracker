import React, { Component } from "react";
import ParkInfo from "./ParkInfo/ParkInfo";
import "./natParkList.css";

export default class NatParkList extends Component {
  render() {
    return (
      <div className="park-list">
        {this.props.toggle && !this.props.listToggle ? (
          <div>
            <div className="list-header">State: {this.props.selectedState}</div>
            {this.props.parkList.length > 0 ? (
              this.props.parkList.map((e, i) => {
                return (
                  <div key={i}>
                    <div
                      className="park-list-item"
                      onClick={() => {
                        this.props.selectPark(e);
                        this.props.select();
                      }}
                    >
                      {e.fullName}
                    </div>
                  </div>
                );
              })
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
                alt="loader img"
              />
            )}
          </div>
        ) : !this.props.toggle && !this.props.listToggle ? (
          <div>
            <ParkInfo
              user={this.props.user}
              select={this.props.select}
              state={this.props.state}
            />
          </div>
        ) : (
          <div className="list-desc">
            Select a state from the map above to view list of parks ⇧
          </div>
        )}
      </div>
    );
  }
}
