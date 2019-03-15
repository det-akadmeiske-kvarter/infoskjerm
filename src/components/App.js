import React, { Component } from "react";
import Axios from "axios";
import DataGrid from "../components/data-grid/data-grid";
import EventCard from "./EventCard";
import "../css/style.css";
import utils from "./Utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      eventData: null
    };
  }

  componentDidMount() {
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
    console.log(this.state.eventData);
    return (
      <div>
        <h1 style={{ color: "#8B1C00" }}>Kvarteret: Informasjon-Skjerm</h1>;

        {utils.getEventCard(this.state.eventData)}
      </div>
    );
  }
}

export default App;
