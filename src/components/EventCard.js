import React, { Component } from "react";

export default class EventCard extends Component {
  render() {
    return (
      <div className="CardContainer">
        <div>
          <img
            id="logo"
            src="https://kvarteret.no/wp-content/uploads/2016/10/pingvinlogo_pms1797_hvit_360.png"
          />
        </div>
        <div className="CardFloorContainer">
          <div className="CardFloorHeader">
            <h6>{this.props.floor}</h6>
            <h3>{this.props.value1}</h3>
            <h6>{this.props.value2}</h6>
          </div>

          <div className="CardContent">{this.props.content1}</div>

          <div className="CardFloorFooter">
            <h6>{this.props.value3}</h6>
            <h6>{this.props.value4}</h6>
          </div>
        </div>
      </div>
    );
  }
}
