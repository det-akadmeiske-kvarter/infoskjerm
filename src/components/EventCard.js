import React, { Component } from "react";

export default class EventCard extends Component {
  render() {
    return (
      <div className="CardContainer">
        <div className="CardContent">
          <div className="Left">
            <span id="leftValue1">{this.props.leftValue1}</span>
            <span id="leftValue2">{this.props.leftValue2}</span>
          </div>
          <div className="Middle">{this.props.middleValue}</div>
          <div className="Right">{this.props.rightValue2}</div>
        </div>
      </div>
    );
  }
}
