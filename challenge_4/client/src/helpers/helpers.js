function checkForTie(boardModel) {

  const isFull = (val) => val === 'Red' || val === 'Blue';

  if (boardModel.every(isFull)) {
    return true;
  }
  return false;
}

function checkForWinHorizontal(boardModel, row, player) {

  let checkRow = boardModel[row];

  let winningCombo = JSON.stringify([player, player, player, player]);

  if (JSON.stringify(checkRow.slice(0, 4)) === winningCombo ||
    JSON.stringify(checkRow.slice(1, 5)) === winningCombo ||
    JSON.stringify(checkRow.slice(2, 6)) === winningCombo ||
    JSON.stringify(checkRow.slice(3, 7)) === winningCombo) {
    return true;
  }

  return false;
}


function checkForWinVertical(board, col, player) {

  let checkCol = [];

  for (var i = 0; i < 6; i++) {
    let play = board[i][col];
    checkCol.push(play);
  };

  let winningCombo = JSON.stringify([player, player, player, player]);

  if (JSON.stringify(checkCol.slice(0, 4)) === winningCombo ||
    JSON.stringify(checkCol.slice(1, 5)) === winningCombo ||
    JSON.stringify(checkCol.slice(2, 6)) === winningCombo ||
    JSON.stringify(checkCol.slice(3, 7)) === winningCombo) {
    return true;
  }

  return false;
}


function checkForWinMinorDiagonal(board, col, row, player) {

  // Start with last placed piece
  // Add 3 row, subtract 3 col
  // while col <= 7 = if this slice is this.state.player, increment count
  // If not, check next set of 4

  let winningCombo = JSON.stringify([player, player, player, player]);

  //  let startRowPosition = this.state.rowPlacementOnYAxis[col];

  let startRow = row;
  let startCol = parseInt(col);

  while (startCol > 0 && startRow < 5) {
    startCol--;
    startRow++;
  }

  let minorDiag = [];

  // make the array to check
  while (startRow >= 0) {
    minorDiag.push(board[startRow][startCol]);
    startRow--;
    startCol++;
  }

  // Checks minor diag matches winningCombo
  if (JSON.stringify(minorDiag.slice(0, 4)) === winningCombo ||
    JSON.stringify(minorDiag.slice(1, 5)) === winningCombo ||
    JSON.stringify(minorDiag.slice(2, 6)) === winningCombo ||
    JSON.stringify(minorDiag.slice(3, 7)) === winningCombo) {
    return true;
  }
  return false;

}


function checkForWinMajorDiagonal(board, col, row, player) {

  // Start with last placed piece
  // Add 3 row, subtract 3 col
  // while col <= 7 = if this slice is this.state.player, increment count
  // If not, check next set of 4

  let winningCombo = JSON.stringify([player, player, player, player]);

  //let startRowPosition = this.state.rowPlacementOnYAxis[col];

  let startRow = row;
  let startCol = parseInt(col);

  console.log('start :', startRow, startCol);
  while (startCol > 0 && startRow > 0) {
    startCol--;
    startRow--;
  }

  let majorDiag = [];

  while (startRow <= 5 && startCol <= 7) {
    majorDiag.push(board[startRow][startCol]);
    startRow++;
    startCol++;
  }

  // Checks major diag matches winningCombo
  if (JSON.stringify(majorDiag.slice(0, 4)) === winningCombo ||
    JSON.stringify(majorDiag.slice(1, 5)) === winningCombo ||
    JSON.stringify(majorDiag.slice(2, 6)) === winningCombo ||
    JSON.stringify(majorDiag.slice(3, 7)) === winningCombo) {
    return true;
  }

  return false;
}


module.exports.checkForTie = checkForTie;
module.exports.checkForWinHorizontal = checkForWinHorizontal;
module.exports.checkForWinVertical = checkForWinVertical;
module.exports.checkForWinMinorDiagonal = checkForWinMinorDiagonal;
module.exports.checkForWinMajorDiagonal = checkForWinMajorDiagonal;