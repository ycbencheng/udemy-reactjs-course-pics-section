import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "Default" };

  handleFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div class="ui segment">
        <form onSubmit={this.handleFormSubmit} class="ui form">
          <div class="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
