import React, { Component } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

class App extends Component {
  async handleSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization:
          "Client-ID ce166e6fca53ac9752979b1d31fe76f4d9006012abefeec9f8ff595f2ba29176",
      },
    });

    console.log("Response", response);
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
