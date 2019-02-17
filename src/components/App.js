import React, { Component } from "react";
import DataGrid from "../components/data-grid/data-grid";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Kvarteret: Informasjon-Skjerm</h1>
        <DataGrid
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
        />
      </div>
    );
  }
}

export default App;
