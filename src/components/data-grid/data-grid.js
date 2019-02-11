import React, { Component } from "react";
import Axios from "axios";
import uuid from "uuidv4";

class DataGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      index: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      Axios.get(this.props.url)
        .then(res => {
          this.setState({ data: res.data });
        })
        .catch(err => {
          console.log(err);
        });
    }, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  createRows = () => {
    let table = [];
    const { data } = this.state;
    let headers = this.props.dataKeys.map(v => {
      v = v.toLowerCase();
      v = v.replace(/\s+/g, "");
      return v;
    });
    for (let i = 0; i < this.state.data.length; i++) {
      let row = [];
      for (var key in this.state.data[i]) {
        if (headers.includes(key)) {
          row.push(<td key={uuid()}>{data[i][key]}</td>);
        }
      }
      table.push(<tr key={uuid()}>{row}</tr>);
    }
    return table;
  };

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr key={0}>
              {this.props.dataKeys.map(col => {
                return <th key={uuid()}>{col}</th>;
              })}
            </tr>

            {this.createRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataGrid;
