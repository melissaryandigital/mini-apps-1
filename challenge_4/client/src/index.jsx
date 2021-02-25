import React from 'react';
import ReactDOM from 'react-dom';
import Square from './components/Square.jsx';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 'red',
      tie: false,
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


  componentDidMount() {

  }




  handleClick(e) {
    e.preventDefault();

    console.log('row:', e.target.getAttribute('data-row'), ' col: ', e.target.getAttribute('data-col'));
    let col = e.target.getAttribute('data-col');

    // Check if the column is full
    if (this.state.rowPlacementOnYAxis[col] === -1) {
      alert('This column is full, please pick another column');
    }



    this.placePiece(col);
    this.updateBoardModel(col);
    this.updateRowAvailableSpace(col);
    this.changePlayerTurn();

  }

  // Places the piece and increments
  placePiece(col) {

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

    if (this.state.player === 'red') {
      this.setState({
        player: 'blue'
      })
    } else {
      this.setState({
        player: 'red'
      })
    };

  }


  render() {

    // Refactor DRY dynamically create board later

    return (
      <div>
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