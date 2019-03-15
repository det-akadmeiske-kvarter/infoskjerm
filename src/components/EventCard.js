import React, { Component } from "react";

export default class EventCard extends Component {
  render() {
    return (
      <div className="CardContainer">
        <div className="CardContent">
          <div className="Left">
            <span>{this.props.arrangoernavn}</span>
            <span>{this.props.sted}</span>
          </div>
          <div className="Middle">{this.props.navn}</div>
          <div className="Right">{this.props.datostart} - {this.props.starttid}</div>
        </div>
      </div>
    );
  }
}
