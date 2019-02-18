import React, { Component } from "react";
import Axios from "axios";
import DataGrid from "../components/data-grid/data-grid";
import EventCard from "./EventCard";
import "../css/style.css";

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
    return (
      <div>
        <h1>Kvarteret: Informasjon-Skjerm</h1>
        {/* <DataGrid
          url="https://kvarteret.no/infoskjerm-test/fetchxml.php"
          dataKeys={[
            "Spillested",
            "Navn",
            "Sted",
            "Dato",
            "Start Tid",
            "Slutt Tid",
            "Type Navn"
          ]}
        /> */}
        <EventCard
          value1={this.state.eventData[0]["arrangoernavn"]}
          value2={this.state.eventData[0]["dato"]}
          value3={this.state.eventData[0]["typenavn"]}
          value4={this.state.eventData[0]["sted"]}
          content1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor "
          value5={this.state.eventData[1]["arrangoernavn"]}
          value6={this.state.eventData[1]["dato"]}
          value7={this.state.eventData[1]["typenavn"]}
          value8={this.state.eventData[1]["sted"]}
          content2="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor"
          value9={this.state.eventData[2]["arrangoernavn"]}
          value10={this.state.eventData[2]["dato"]}
          value11={this.state.eventData[2]["typenavn"]}
          value12={this.state.eventData[2]["sted"]}
          content3="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor"
        />
      </div>
    );
  }
}

export default App;
