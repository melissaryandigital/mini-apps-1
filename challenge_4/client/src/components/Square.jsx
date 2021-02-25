import React from 'react';
import ReactDOM from 'react-dom';

const Square = (props) => (
  <div className="grid-item" data-row={props.row} data-col={props.col} onClick={(e) => {props.handleClick(e);}}></div>
);

export default Square;