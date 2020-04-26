import React, { Component } from "react";

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        placeholder="Search here!"
        onChange={this.handleUpdate} // if click outside of the box will search immediately
      />
    )
  }
}

export default SearchBar;
