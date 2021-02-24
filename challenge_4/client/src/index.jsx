import React from 'react';
import ReactDOM from 'react-dom';
import Square from './components/Square.jsx';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 'X',
      tie: false,
      board: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.changePlayerTurn = this.changePlayerTurn.bind(this);
    this.updateBoardModel = this.updateBoardModel.bind(this);

  }


  componentDidMount() {

  }

  handleClick(e) {
    e.preventDefault();

    console.log('x:', e.target.getAttribute('data-x'), ' y: ', e.target.getAttribute('data-y'));
    let xPos = e.target.getAttribute('data-x');
    let yPos = e.target.getAttribute('data-y');

    let square = e.target;

    // Check if the square is already occupied
    if (square.innerHTML !== '') {
      alert('Please choose another square, that one has already been taken.');
      return;
    }

    square.innerHTML += this.state.player;


    this.changePlayerTurn();
    this.updateBoard(xPos, yPos);

  }

  updateBoardModel() {

    // Get the coordinates
    // Assign the player to that coordinate
    // Update the board model

    this.setState({
      board: joined
    });


  }

  checkForWinHorizontal() {

  }

  checkForWinVertical() {

  }

  checkForWinDiagonal() {

  }

  checkForTie() {

  }

  // Using X and O for now, will come back and style when functionality complete
  changePlayerTurn() {

    if (this.state.player === 'X') {
      this.setState({
        player: 'O'
      })
    } else {
      this.setState({
        player: 'X'
      })
    };

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

          <Square x={0} y={5} handleClick={this.handleClick} />
          <Square x={1} y={5} handleClick={this.handleClick} />
          <Square x={2} y={5} handleClick={this.handleClick} />
          <Square x={3} y={5} handleClick={this.handleClick} />
          <Square x={4} y={5} handleClick={this.handleClick} />
          <Square x={5} y={5} handleClick={this.handleClick} />
          <Square x={6} y={5} handleClick={this.handleClick} />
        </div>
      </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));