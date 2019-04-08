import React, { Component } from "react";
import DataTable from "./DataTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataTable>
          <DataTable.Column field={"name"} header={"Name"} />
          <DataTable.Column field={"name1"} header={"Name1"} />
          <DataTable.Column field={"name2"} header={"Name2"} />
        </DataTable>
      </div>
    );
  }
}

export default App;
