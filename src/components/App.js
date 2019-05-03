import React, { Component } from "react";
import Axios from "axios";
import "../css/style.css";
<<<<<<< HEAD
import utils from "./Utils";
=======
import { getEventsAtFloor, generateEventCards, filterPastEvents } from "../utils";
import { returnDummyData } from '../dummy-data/events'

import {getFloor} from "../utils.js";
import FloorContainer from "./FloorContainer";
import Header from "./Header";
>>>>>>> 361877affabf8a201f8eaa690cba6aefac02da6e

class App extends Component {
  constructor() {
    super();
    this.state = {
      eventData: null
    };
  }

  componentDidMount() {
    /* this.interval = setInterval(() => {
      this.setState({eventData: filterPastEvents(returnDummyData())})
    }, 1000) */
    
    Axios.get("https://kvarteret.no/info/fetchxml.php")
        .then(res => {
          this.setState({ eventData: filterPastEvents(res.data) });
        })
        .catch(err => {
          console.log(err);
        });
    this.interval = setInterval(() => {
<<<<<<< HEAD
           Axios.get("https://kvarteret.no/infoskjerm-test/fetchxml.php")
=======
      Axios.get("https://kvarteret.no/info/fetchxml.php")
>>>>>>> 361877affabf8a201f8eaa690cba6aefac02da6e
        .then(res => {
          this.setState({ eventData: filterPastEvents(res.data) });
        })
        .catch(err => {
          console.log(err);
        });
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (!this.state.eventData) {
      return <div>Loading..</div>;
    }
<<<<<<< HEAD
    console.log(this.state.eventData);
    return (
      <div>
        <h1 style={{ color: "#8B1C00" }}>Kvarteret: Informasjon-Skjerm</h1>;

        {utils.getEventCard(this.state.eventData)}
=======
    return (
      <div id="MainContainer">
        <Header />
        <div id='Floors'>
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
>>>>>>> 361877affabf8a201f8eaa690cba6aefac02da6e
      </div>
    );
  }
}

export default App;
