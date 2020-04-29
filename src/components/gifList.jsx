import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gif from './gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.listArray.map(eachElement => <Gif id={eachElement.id} key={eachElement.id} selectGif={props.selectGif} />)}
    </div>
  );
};

export default GifList;
