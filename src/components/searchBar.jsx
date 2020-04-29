import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {
  handleSearch = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input type="text" name="form-search" onChange={this.handleSearch} />
    );
  }
}
export default Search;
