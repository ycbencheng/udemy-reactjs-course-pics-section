import React, { Component } from "react";
import SearchBar from "./SearchBar";

class App extends Component {
  handleSearchSubmit(term) {
    console.log("App", term);
  }

  render() {
    return (
      <div class="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default App;
