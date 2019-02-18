import React, { Component } from "react";

export default class EventCard extends Component {
  render() {
    return (
      <div className="CardContainer">
        <div className="CardFloorContainer">
          <div className="CardFloorHeader">
            <h6>Etg.3</h6>
            <h3>{this.props.value1}</h3>
            <h6>{this.props.value2}</h6>
          </div>

          <div className="CardContent">
            {this.props.content1}
          </div>

          <div className="CardFloorFooter">
            <h6>{this.props.value3}</h6>
            <h6>{this.props.value4}</h6>
          </div>
        </div>
        <div className="CardFloorContainer">
          <div className="CardFloorHeader">
            <h6>Etg.2</h6>
            <h3>{this.props.value5}</h3>
            <h6>{this.props.value6}</h6>
          </div>

          <div className="CardContent">
            {this.props.content2}
          </div>

          <div className="CardFloorFooter">
            <h6>{this.props.value7}</h6>
            <h6>{this.props.value8}</h6>
          </div>
        </div>
        <div className="CardFloorContainer">
          <div className="CardFloorHeader">
            <h6>Etg.1</h6>
            <h3>{this.props.value9}</h3>
            <h6>{this.props.value10}</h6>
          </div>

          <div className="CardContent">
            {this.props.content3}
          </div>

          <div className="CardFloorFooter">
            <h6>{this.props.value11}</h6>
            <h6>{this.props.value12}</h6>
          </div>
        </div>
      </div>
    );
  }
}
