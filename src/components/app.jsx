import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Gif from './gif';
import GifList from './gifList';
import SearchBar from "./searchBar";

const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';
const giphy = require('giphy-api')(GIPHY_API_KEY);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifsList: [],
      selectedGifID: "GYx3rLjdBPfyM",
    };
    this.search();
  }

  search = (query) => {
    giphy.search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      // Res contains gif data!
      this.setState({
        gifsList: result.data
      });
    });
  }

  chooseThisGif = (id) => {
    this.setState({
      selectedGifID: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <div className="form-search">
            <SearchBar searchFunction={this.search} />
          </div>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifID} />
          </div>
        </div>
        <div className="righ-scene">
          <GifList gifsB={this.state.gifsList} changeGif={this.chooseThisGif}/>
        </div>
      </div>
    )
  }
}

export default App;
