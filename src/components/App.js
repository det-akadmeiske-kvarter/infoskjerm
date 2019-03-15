import React, { Component } from "react";
import Axios from "axios";
import DataGrid from "../components/data-grid/data-grid";
import EventCard from "./EventCard";
import "../css/style.css";
import {getFloor} from "../utils";
import {getCurrentEvents} from "../utils";
//import "../utils";

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
    var currentEvents = getCurrentEvents(this.state.eventData);

    return (
      <div>
        <h1 style={{ color: "#8B1C00" }}>Kvarteret: Informasjon-Skjerm</h1>
        <EventCard
          value1={this.state.eventData[0]["arrangoernavn"]}
          value1={this.state.eventData[0]["navn"]}
          value2={this.state.eventData[0]["dato"]}
          value3={this.state.eventData[0]["typenavn"]}
          value4={this.state.eventData[0]["sted"]}
          content1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor "
        />
      </div>
    );
  }
}

export default App;
