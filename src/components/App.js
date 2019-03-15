import React, { Component } from "react";
import Axios from "axios";
import DataGrid from "../components/data-grid/data-grid";
import "../css/style.css";
import {getEventsAtFloor} from "../utils";
//import "../utils";

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
    Axios.get("https://kvarteret.no/infoskjerm-test/fetchxml.php")
        .then(res => {
          this.setState({ eventData: res.data });
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
    }, 10000);
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
          floor={1}
          eventData={getEventsAtFloor(this.state.eventData, 1)}
        />
        <FloorContainer
        floor={2}
          eventData={getEventsAtFloor(this.state.eventData, 2)}
        />
        <FloorContainer
        floor={3}
          eventData={getEventsAtFloor(this.state.eventData, 3)}
        />
      </div>
    );
  }
}

export default App;
