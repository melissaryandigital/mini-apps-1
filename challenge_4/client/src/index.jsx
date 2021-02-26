import React from 'react';
import ReactDOM from 'react-dom';
import Square from './components/Square.jsx';
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
    this.checkForWinHorizontal = this.checkForWinHorizontal.bind(this);
    this.checkForWinVertical = this.checkForWinVertical.bind(this);
    this.checkForWinMinorDiagonal = this.checkForWinMinorDiagonal.bind(this);
    this.changePlayerTurn = this.changePlayerTurn.bind(this);

  }


  componentDidMount() {

  }




  handleClick(e) {
    e.preventDefault();

    console.log('row:', e.target.getAttribute('data-row'), ' col: ', e.target.getAttribute('data-col'));
    let col = e.target.getAttribute('data-col');
    let row = e.target.getAttribute('data-row');

    // Check if the column is full
    if (this.state.rowPlacementOnYAxis[col] === -1) {
      alert('This column is full, please pick another column');
    }



    this.placePiece(col);
    this.updateBoardModel(col);
    this.checkForWinHorizontal(row);
    this.checkForWinVertical(col);
    this.checkForWinMinorDiagonal(col);
    this.checkForTie();
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

  checkForWinHorizontal(row) {
    // Check if current row includes 4 player pieces
    // If it does, display winner message

    // Find the row that the last piece was played on and the player

    let checkRow = this.state.boardModel[row];

    let player = this.state.player;
    let winningCombo = [player, player, player, player];

    // There's a more succint way to do this but this is OK for now
    if (JSON.stringify(checkRow.slice(0, 4)) === JSON.stringify(winningCombo) ||
      JSON.stringify(checkRow.slice(1, 5)) === JSON.stringify(winningCombo) ||
      JSON.stringify(checkRow.slice(2, 6)) === JSON.stringify(winningCombo) ||
      JSON.stringify(checkRow.slice(3, 7)) === JSON.stringify(winningCombo)) {
      this.setState({
        message: `${this.state.player} WON!`,
        gameActive: false
      })
    }
  }

  checkForWinVertical(col) {

    // Create an array of player positions in column
    // Iterate through board grabbing the nth value
    // Compare that with the possible winning combos

    // Note to self - can add winning combo to state/props to make more DRY
    // Note to self - break this file into separate modules

    let checkCol = [];

    let getPlayer = this.state.boardModel;

    for (var i = 0; i < 6; i++) {
      let play = getPlayer[i][col];
      checkCol.push(play);
    };

    let player = this.state.player;
    let winningCombo = [player, player, player, player];

    if (JSON.stringify(checkCol.slice(0, 4)) === JSON.stringify(winningCombo) ||
      JSON.stringify(checkCol.slice(1, 5)) === JSON.stringify(winningCombo) ||
      JSON.stringify(checkCol.slice(2, 6)) === JSON.stringify(winningCombo) ||
      JSON.stringify(checkCol.slice(3, 7)) === JSON.stringify(winningCombo)) {
      this.setState({
        message: `${this.state.player} WON!`,
        gameActive: false
      });
    }
  }

  checkForWinMinorDiagonal(col) {
    // Check the position of last piece played and player
    // Define the winning possibilities based on the last play
    // Compute both diagonals
    // Compare both diagonals with winning possibilities

    let checkDiagonalUp = [];
    let checkDiagonalDown = [];
    let getPlayer = this.state.boardModel;

    // Create the 2 current diagonals

    // go col # left and col # down


    // Get the last played position based on the column

    let startRowPosition = this.state.rowPlacementOnYAxis[col];
    console.log('last played position: ', startRowPosition, col);

    let play = getPlayer[startRowPosition][col];

    // While the row is < 5 and the col > 0
    // When the loop ends this is the starting point to start checking the diag

    let startRow = startRowPosition;
    let startCol = col;
    while (startRow < 5) {
      startRow++;
      startCol--;
    }

    console.log('start checking at: ', startRow, startCol);

    let player = this.state.player;
    let winningCombo = [player, player, player, player];
  }

  checkForTie() {

    const isFull = (val) => val !== '';

    if (this.state.boardModel.every(isFull)) {
      this.setState({
        message: 'It\'s a TIE!  Play again!'
      });
    }
  }


  // Using X and O for now, will come back and style when functionality complete
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
        <h2>{`${this.state.player}\'s turn`}</h2>
        <h3>{`${this.state.message}`}</h3>
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