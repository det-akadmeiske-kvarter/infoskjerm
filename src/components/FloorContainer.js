import React, { Component } from "react";
import EventCard from "./EventCard";

export default class FloorContainer extends Component {
  render() {
    var eventCards = [];
    for (var i = 0; i < this.props.eventData.length; i++) {
        eventCards.push(<EventCard
            floor={"Etg1"}
            arrangoernavn={this.props.eventData[i]["arrangoernavn"]}
            navn={this.props.eventData[i]["navn"]}
            sted={this.props.eventData[i]["sted"]}
            typenavn={this.props.eventData[i]["typenavn"]}
            datostart={this.props.eventData[i]["datostart"]}
            starttid={this.props.eventData[i]["starttid"]}
          />);
    }
    return (
      <div className="CardFloorContainer">
        <div className="CardFloorHeader">
            <h2>Etasje nummer</h2>
        </div>
        {eventCards}
      </div>
    );
  }
}
