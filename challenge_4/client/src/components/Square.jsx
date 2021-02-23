import React from 'react';
import ReactDOM from 'react-dom';

const Square = (props) => (
  <div className="grid-item" data-x={props.x} data-y={props.y} onClick={(e) => {props.handleClick(e);}}></div>
);

export default Square;