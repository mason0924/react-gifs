import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () =>{
    if(this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const gifLink = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;

    return (
      <img src={gifLink} className="gif" alt="" onClick={this.handleClick} id={this.props.id}/>
    );
  }
}

export default Gif;
