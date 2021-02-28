import React from 'react';
import ReactDOM from 'react-dom';
import Square from './components/Square.jsx';

import helpers from './helpers/helpers.js';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 'Red',
      gameActive: true,
      tie: false,
      message: '',
      boardModel: [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '']
      ],
      rowPlacementOnYAxis: [5, 5, 5, 5, 5, 5, 5]
    }

    this.handleClick = this.handleClick.bind(this);
    this.placePiece = this.placePiece.bind(this);
    this.updateBoardModel = this.updateBoardModel.bind(this);
    this.changePlayerTurn = this.changePlayerTurn.bind(this);

  }

  handleClick(e) {
    e.preventDefault();

    let col = e.target.getAttribute('data-col');
    let row = e.target.getAttribute('data-row');

    // Check if the column is full
    if (this.state.rowPlacementOnYAxis[col] === -1) {
      alert('This column is full, please pick another column');
    }

    this.placePiece(col);
    this.updateBoardModel(col);

    let board = this.state.boardModel;
    let player = this.state.player;

    let rowPlacement = this.state.rowPlacementOnYAxis[col];
    let horizonalWin = helpers.checkForWinHorizontal(board, rowPlacement, player);
    let verticalWin = helpers.checkForWinVertical(board, col, player);
    let minorDiagonalWin = helpers.checkForWinMinorDiagonal(board, col, rowPlacement, player);
    let majorDiagonalWin = helpers.checkForWinMajorDiagonal(board, col, rowPlacement, player);

    if (horizonalWin || verticalWin || minorDiagonalWin || majorDiagonalWin) {
      this.setState({
        message: `${this.state.player} WON!`,
        gameActive: false
      })
    };

    if (helpers.checkForTie(this.state.boardModel)) {
      this.setState({
        message: 'It\'s a TIE!  Play again!',
        gameActive: false
      });
    };

    this.updateRowAvailableSpace(col);
    this.changePlayerTurn();

  }

  // Places the piece and increments
  placePiece(col) {

    if (!this.state.gameActive) {
      alert(`We have a winner.  Please start a new game.`);
      location.reload();
    }

    // What Y axis slot to place in clicked row
    let rowPlacement = this.state.rowPlacementOnYAxis[col];

    // Selecting that square
    document.querySelector(`[data-row="${rowPlacement}"][data-col="${col}"]`).classList.add(`${this.state.player}`);

  }

  updateBoardModel(col) {

    // Get the position of the piece that was just played
    // Add it to the boardModel

    let updatedBoard = this.state.boardModel;
    updatedBoard[this.state.rowPlacementOnYAxis[col]][col] = this.state.player;

    this.setState({
      boardModel: updatedBoard
    })
  }

  // Decrement the index of the Y axis so next piece dropped in this column will fall on top

  updateRowAvailableSpace(col) {

    let newRowPlacementOnYAxis = this.state.rowPlacementOnYAxis;
    newRowPlacementOnYAxis[col]--;

    this.setState({
      rowPlacementOnYAxis: newRowPlacementOnYAxis
    });
  }


  changePlayerTurn() {

    if (this.state.player === 'Red') {
      this.setState({
        player: 'Blue'
      })
    } else {
      this.setState({
        player: 'Red'
      })
    };

  }


  render() {

    // Refactor DRY dynamically create board later

    return (
      <div>
        <h2>{`${this.state.message}`}</h2>
        <h3>{`${this.state.player}\'s turn`}</h3>
        <div className="grid-container">
          <Square row={0} col={0} handleClick={this.handleClick} />
          <Square row={0} col={1} handleClick={this.handleClick} />
          <Square row={0} col={2} handleClick={this.handleClick} />
          <Square row={0} col={3} handleClick={this.handleClick} />
          <Square row={0} col={4} handleClick={this.handleClick} />
          <Square row={0} col={5} handleClick={this.handleClick} />
          <Square row={0} col={6} handleClick={this.handleClick} />

          <Square row={1} col={0} handleClick={this.handleClick} />
          <Square row={1} col={1} handleClick={this.handleClick} />
          <Square row={1} col={2} handleClick={this.handleClick} />
          <Square row={1} col={3} handleClick={this.handleClick} />
          <Square row={1} col={4} handleClick={this.handleClick} />
          <Square row={1} col={5} handleClick={this.handleClick} />
          <Square row={1} col={6} handleClick={this.handleClick} />

          <Square row={2} col={0} handleClick={this.handleClick} />
          <Square row={2} col={1} handleClick={this.handleClick} />
          <Square row={2} col={2} handleClick={this.handleClick} />
          <Square row={2} col={3} handleClick={this.handleClick} />
          <Square row={2} col={4} handleClick={this.handleClick} />
          <Square row={2} col={5} handleClick={this.handleClick} />
          <Square row={2} col={6} handleClick={this.handleClick} />

          <Square row={3} col={0} handleClick={this.handleClick} />
          <Square row={3} col={1} handleClick={this.handleClick} />
          <Square row={3} col={2} handleClick={this.handleClick} />
          <Square row={3} col={3} handleClick={this.handleClick} />
          <Square row={3} col={4} handleClick={this.handleClick} />
          <Square row={3} col={5} handleClick={this.handleClick} />
          <Square row={3} col={6} handleClick={this.handleClick} />

          <Square row={4} col={0} handleClick={this.handleClick} />
          <Square row={4} col={1} handleClick={this.handleClick} />
          <Square row={4} col={2} handleClick={this.handleClick} />
          <Square row={4} col={3} handleClick={this.handleClick} />
          <Square row={4} col={4} handleClick={this.handleClick} />
          <Square row={4} col={5} handleClick={this.handleClick} />
          <Square row={4} col={6} handleClick={this.handleClick} />

          <Square row={5} col={0} handleClick={this.handleClick} />
          <Square row={5} col={1} handleClick={this.handleClick} />
          <Square row={5} col={2} handleClick={this.handleClick} />
          <Square row={5} col={3} handleClick={this.handleClick} />
          <Square row={5} col={4} handleClick={this.handleClick} />
          <Square row={5} col={5} handleClick={this.handleClick} />
          <Square row={5} col={6} handleClick={this.handleClick} />
        </div>

      </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));