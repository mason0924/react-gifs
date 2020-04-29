import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gif from './gif';
import GifList from './gifList';
import Search from './searchBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifLongList: [],
      selectedGif: "wqb5K5564JSlW"
    };
  }

  search = (query) => {
    const giphy = require('giphy-api')('1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm');

    giphy.search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifLongList: res.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGif: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <div className="form-search">
            <p>
              Search from here!
            </p>
            <Search searchFunction={this.search} />
          </div>
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>

        <div className="right-scene">
          <GifList listArray={this.state.gifLongList}  selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
