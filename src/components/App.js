import React, { Component } from "react";
import Axios from "axios";
import "../css/style.css";
import {
  getEventsAtFloor,
  generateEventCards,
  filterPastEvents,
  getTime
} from "../utils";
import { returnDummyData } from "../dummy-data/events";
import FloorContainer from "./FloorContainer";
import Header from "./Header";

import { pulse, headShake } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  pulse1: {
    animation: "1 0.5s 0s",
    animationName: Radium.keyframes(pulse, "pulse1")
  },
  pulse2: {
    animation: "1 0.5s 0.10s",
    animationName: Radium.keyframes(pulse, "pulse2")
  },
  pulse3: {
    animation: "1 0.5s 0.20s",
    animationName: Radium.keyframes(pulse, "pulse3")
  },
  pulse4: {
    animation: "3 0.5s 0.30s",
    animationName: Radium.keyframes(pulse, "pulse4")
  },
  bounceIn: {
    animation: "1 0.5s 1.35s",
    animationName: Radium.keyframes(headShake, "bounceIn")
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      eventData: null,
      onPause: false
    };
  }

  /**
   * The interval fetching the data of this function is paused when the time hits 23:55, and restarts 03:00
   * This is to keep previous day events visible on the screen. At 00:00 the servers serves new data for the new day,
   * this will be visible at 03:00 until 03:00.
   */
  componentDidMount() {
    /* this.interval = setInterval(() => {
      this.setState({ eventData: filterPastEvents(returnDummyData()) });
    }, 5000); */

    Axios.get("https://kvarteret.no/info/fetchxml.php")
      .then(res => {
        this.setState({ eventData: filterPastEvents(res.data) });
      })
      .catch(err => {
        console.log(err);
      });
    this.interval = setInterval(() => {
      console.log(this.state.onPause);
      var time = getTime();
      if (time >= "23:55:00" && time <= "23:59:00") {
        if (this.state.onPause !== true) {
          this.setState({ onPause: true });
        }
      }
      if (time >= "03:00:00" && time <= "03:05:00") {
        if (this.state.onPause !== false) {
          this.setState({ onPause: false });
        }
      }
      if (this.state.onPause === false) {
        Axios.get("https://kvarteret.no/info/fetchxml.php")
          .then(res => {
            this.setState({ eventData: "" }, () => {
              this.setState({ eventData: filterPastEvents(res.data) });
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    }, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (!this.state.eventData) {
      return <div>Loading..</div>;
    }
    return (
      <StyleRoot>
        <div id="MainContainer">
          <div style={styles.bounceIn}>
            <div style={styles.pulse4}>
              <Header />
            </div>
          </div>
          <div id="Floors">
            <div style={styles.pulse3}>
              <FloorContainer
                floor={3}
                eventCards={generateEventCards(
                  getEventsAtFloor(this.state.eventData, 3)
                )}
              />
            </div>
            <div style={styles.pulse2}>
              <FloorContainer
                floor={2}
                eventCards={generateEventCards(
                  getEventsAtFloor(this.state.eventData, 2)
                )}
              />
            </div>
            <div style={styles.pulse1}>
              <FloorContainer
                floor={1}
                eventCards={generateEventCards(
                  getEventsAtFloor(this.state.eventData, 1)
                )}
              />
            </div>
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default App;
