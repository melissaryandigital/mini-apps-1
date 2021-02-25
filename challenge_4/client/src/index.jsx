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
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', '']
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

    console.log('x:', e.target.getAttribute('data-x'), ' y: ', e.target.getAttribute('data-y'));
    let xPos = e.target.getAttribute('data-x');

    // Check if the column is full
    if (this.state.rowPlacementOnYAxis[xPos] === -1) {
      alert('This column is full, please pick another column');
    }



    this.placePiece(xPos);
    this.updateBoardModel(xPos);
    this.updateRowAvailableSpace(xPos);
    this.changePlayerTurn();

  }

  // Places the piece and increments
  placePiece(x) {

    // What Y axis slot to place in clicked row
    let colPlacement = this.state.rowPlacementOnYAxis[x];

    // Selecting that square
    document.querySelector(`[data-x="${x}"][data-y="${colPlacement}"]`).classList.add(`${this.state.player}`);

  }

  updateBoardModel(x) {

    // Get the position of the piece that was just played
    // Add it to the boardModel


    let updatedBoard = this.state.boardModel;
    updatedBoard[x][this.state.rowPlacementOnYAxis[x]] = this.state.player;

    this.setState({
      boardModel: updatedBoard
    })
  }

  // Decrement the index of the Y axis so next piece dropped in this column will fall on top

  updateRowAvailableSpace(x) {

    let newRowPlacementOnYAxis = this.state.rowPlacementOnYAxis;
    newRowPlacementOnYAxis[x]--;

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