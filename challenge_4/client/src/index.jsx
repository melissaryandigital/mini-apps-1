import React from 'react';
import ReactDOM from 'react-dom';
import Square from './components/Square.jsx';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 1,
      tie: false,
      board: {}
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    console.log('square clicked');
  }


  render() {

    // Refactor DRY dynamically create board later

    return (
      <div>
        <div className="grid-container">
          <Square x={0} y={0} handleClick={this.handleClick} />
          <Square x={1} y={0} handleClick={this.handleClick} />
          <Square x={2} y={0} handleClick={this.handleClick} />
          <Square x={3} y={0} handleClick={this.handleClick} />
          <Square x={4} y={0} handleClick={this.handleClick} />
          <Square x={5} y={0} handleClick={this.handleClick} />
          <Square x={6} y={0} handleClick={this.handleClick} />

          <Square x={0} y={1} handleClick={this.handleClick} />
          <Square x={1} y={1} handleClick={this.handleClick} />
          <Square x={2} y={1} handleClick={this.handleClick} />
          <Square x={3} y={1} handleClick={this.handleClick} />
          <Square x={4} y={1} handleClick={this.handleClick} />
          <Square x={5} y={1} handleClick={this.handleClick} />
          <Square x={6} y={1} handleClick={this.handleClick} />

          <Square x={0} y={2} handleClick={this.handleClick} />
          <Square x={1} y={2} handleClick={this.handleClick} />
          <Square x={2} y={2} handleClick={this.handleClick} />
          <Square x={3} y={2} handleClick={this.handleClick} />
          <Square x={4} y={2} handleClick={this.handleClick} />
          <Square x={5} y={2} handleClick={this.handleClick} />
          <Square x={6} y={2} handleClick={this.handleClick} />

          <Square x={0} y={3} handleClick={this.handleClick} />
          <Square x={1} y={3} handleClick={this.handleClick} />
          <Square x={2} y={3} handleClick={this.handleClick} />
          <Square x={3} y={3} handleClick={this.handleClick} />
          <Square x={4} y={3} handleClick={this.handleClick} />
          <Square x={5} y={3} handleClick={this.handleClick} />
          <Square x={6} y={3} handleClick={this.handleClick} />

          <Square x={0} y={4} handleClick={this.handleClick} />
          <Square x={1} y={4} handleClick={this.handleClick} />
          <Square x={2} y={4} handleClick={this.handleClick} />
          <Square x={3} y={4} handleClick={this.handleClick} />
          <Square x={4} y={4} handleClick={this.handleClick} />
          <Square x={5} y={4} handleClick={this.handleClick} />
          <Square x={6} y={4} handleClick={this.handleClick} />

          <Square x={0} y={4} handleClick={this.handleClick} />
          <Square x={1} y={4} handleClick={this.handleClick} />
          <Square x={2} y={4} handleClick={this.handleClick} />
          <Square x={3} y={4} handleClick={this.handleClick} />
          <Square x={4} y={4} handleClick={this.handleClick} />
          <Square x={5} y={4} handleClick={this.handleClick} />
          <Square x={6} y={4} handleClick={this.handleClick} />
        </div>
      </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));