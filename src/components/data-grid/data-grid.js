import React, { Component } from "react";
import Axios from "axios";

class DataGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Axios.get(this.props.url)
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  createRows = () => {
    let table = []
    const { data } = this.state
    let headers = this.props.dataKeys.map(v => {
      v = v.toLowerCase();
      v = v.replace(/\s+/g, '');
      return v;
    })
    for(let i = 0; i < this.state.data.length; i++) {
      let row = []
      for(var key in this.state.data[i]) {
        if(headers.includes(key)) {
          row.push(<td>{data[i][key]}</td>)
        }
      }
      table.push(<tr key={i+1}>{row}</tr>)
    }
    return table;
  }

  render() {
    return (
      <div>
        <table>
          <tr key={0}>
            {this.props.dataKeys.map(col => {
              return <th>{col}</th>;
            })}
          </tr>
          
          {this.createRows()}
          
        </table>
      </div>
    );
  }
}

export default DataGrid;
