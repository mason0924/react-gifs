import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Gif extends Component {
  handleClick = () => {
    // this should read a props with function name
    // check if function exists
    // if yes, call the function, parameter = this.props.id
    // gifList should pass the function to gif
    if (this.props.chooseThisGif) {
      this.props.chooseThisGif(this.props.id);
    }
  }

  render() {
    const gifUrl = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={gifUrl} className='gif' alt="gif picture" onClick={this.handleClick} id={this.props.id}/>
    );
  }
}

export default Gif;
