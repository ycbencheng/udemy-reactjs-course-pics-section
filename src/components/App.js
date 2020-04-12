import React, { Component } from "react";

import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends Component {
  state = { images: [] };

  handleSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div class="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
