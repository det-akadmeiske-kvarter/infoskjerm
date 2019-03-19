import React, { Component } from "react";
import EventCard from "./EventCard";

export default class FloorContainer extends Component {
  render() {
    return (
      <div className="CardFloorContainer">
        <div className="CardFloorHeader">
            <h2>Etg{this.props.floor}</h2>
        </div>
        {this.props.eventCards}
      </div>
    );
  }
}
