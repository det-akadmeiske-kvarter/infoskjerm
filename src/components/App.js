import React, { Component } from "react";
import Axios from "axios";
import "../css/style.css";
import { getEventsAtFloor, generateEventCards, filterPastEvents } from "../utils";
import { returnDummyData } from '../dummy-data/events'

import {getFloor} from "../utils.js";
import FloorContainer from "./FloorContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      eventData: null
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({eventData: filterPastEvents(returnDummyData())})
    }, 1000)
    
    /* Axios.get("https://kvarteret.no/infoskjerm-test/fetchxml.php")
        .then(res => {
          this.setState({ eventData: filterPastEvents(res.data) });
        })
        .catch(err => {
          console.log(err);
        });
    this.interval = setInterval(() => {
      Axios.get("https://kvarteret.no/infoskjerm-test/fetchxml.php")
        .then(res => {
          this.setState({ eventData: res.data });
        })
        .catch(err => {
          console.log(err);
        });
    }, 10000); */
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (!this.state.eventData) {
      return <div>Loading..</div>;
    }
    return (
      <div id="MainContainer">
        <h1 id="title">Kvarteret: Informasjon-Skjerm</h1>
        {/* TODO: Bytt ut eventData med data fra hver etasje */}
        <FloorContainer
          floor={3}
          eventCards={generateEventCards(getEventsAtFloor(this.state.eventData, 3))}
        />
        <FloorContainer
          floor={2}
          eventCards={generateEventCards(getEventsAtFloor(this.state.eventData, 2))}
        />
        <FloorContainer
          floor={1}
          eventCards={generateEventCards(getEventsAtFloor(this.state.eventData, 1))}
        />
      </div>
    );
  }
}

export default App;
