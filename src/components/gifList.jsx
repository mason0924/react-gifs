import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gif from './gif.jsx';

class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
        {this.props.gifsB.map((eachGif) => {
          return (
            <Gif id={eachGif.id} key={eachGif.id} chooseThisGif={this.props.changeGif} />
          );
        })}
;
      </div>
    );
  }
}

export default GifList;
